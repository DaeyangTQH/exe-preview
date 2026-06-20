"""Generate transparent / recolored variants of the brand logo.

Source: assets/img/logo.jpg  (parchment background, dark-brown ink line-art)
Method: knock out the warm paper background using a luminance ramp so the
brown ink keeps its anti-aliased edges, then derive recolored variants.
"""
from PIL import Image
import numpy as np
import os

SRC = "logo.jpg"
HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

img = Image.open(SRC).convert("RGB")
rgb = np.asarray(img).astype(np.float32)

# Luminance ramp: paper (light) -> alpha 0, ink (dark) -> alpha 255
lum = rgb.mean(axis=2)
LO, HI = 60.0, 150.0  # below LO = solid ink, above HI = full paper
alpha = np.clip((HI - lum) / (HI - LO), 0.0, 1.0)
alpha8 = (alpha * 255).astype(np.uint8)


def autocrop(rgba_arr, pad_ratio=0.0):
    a = rgba_arr[:, :, 3]
    ys, xs = np.where(a > 8)
    if len(xs) == 0:
        return rgba_arr
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    if pad_ratio:
        w, h = x1 - x0, y1 - y0
        px, py = int(w * pad_ratio), int(h * pad_ratio)
        x0, y0 = max(0, x0 - px), max(0, y0 - py)
        x1 = min(rgba_arr.shape[1] - 1, x1 + px)
        y1 = min(rgba_arr.shape[0] - 1, y1 + py)
    return rgba_arr[y0:y1 + 1, x0:x1 + 1]


def save(arr, name):
    Image.fromarray(arr, "RGBA").save(name)
    print("wrote", name, arr.shape[1], "x", arr.shape[0])


# 1) Transparent original-ink logo (brown line-art on transparent paper)
ink = np.dstack([rgb.astype(np.uint8), alpha8])
ink = autocrop(ink, pad_ratio=0.01)
save(ink, "logo-transparent.png")

# 2) Cream/ivory version for dark backgrounds (footer)
CREAM = np.array([246, 242, 234], np.uint8)
light = np.dstack([
    np.broadcast_to(CREAM, (rgb.shape[0], rgb.shape[1], 3)).copy(),
    alpha8,
])
light = autocrop(light, pad_ratio=0.01)
save(light, "logo-light.png")

# 3) Square mark for header / favicon: keep the full emblem on transparent,
#    trimmed and centered on a square canvas.
mark = autocrop(np.dstack([rgb.astype(np.uint8), alpha8]), pad_ratio=0.0)
h, w = mark.shape[:2]
side = max(h, w)
canvas = np.zeros((side, side, 4), np.uint8)
oy, ox = (side - h) // 2, (side - w) // 2
canvas[oy:oy + h, ox:ox + w] = mark
mark_img = Image.fromarray(canvas, "RGBA")

mark_img.resize((512, 512), Image.LANCZOS).save("logo-mark.png")
print("wrote logo-mark.png 512 x 512")
mark_img.resize((180, 180), Image.LANCZOS).save("favicon.png")
print("wrote favicon.png 180 x 180")
