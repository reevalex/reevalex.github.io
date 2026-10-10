import argparse
import sys
from PIL import Image, ImageDraw, ImageFilter


def edge_seeds(w, h, step=None):
    if step is None:
        step = max(1, min(w, h) // 20)
    seeds = [
        (0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1),
        (w // 2, 0), (0, h // 2), (w - 1, h // 2), (w // 2, h - 1),
    ]
    for x in range(0, w, step):
        seeds += [(x, 0), (x, h - 1)]
    for y in range(0, h, step):
        seeds += [(0, y), (w - 1, y)]
    return seeds


def remove_bg(im, dark=False):
    """Flood-fill background from edges to transparent.
    light mode: near-white; dark mode (--dark): near-black.
    """
    im = im.convert("RGB")
    im.thumbnail((900, 900))
    w, h = im.size
    mask = Image.new("L", (w, h), 0)
    work = im.copy()
    marker = (255, 0, 255)
    if dark:
        # near-black background (night renders); keep lit building + base
        seed_ok = lambda p: max(p) < 40
        thresh = 32
    else:
        seed_ok = lambda p: min(p) > 225
        thresh = 28
    for x, y in edge_seeds(w, h):
        if seed_ok(work.getpixel((x, y))):
            ImageDraw.floodfill(work, (x, y), marker, thresh=thresh)
    px = work.load()
    m = mask.load()
    for yy in range(h):
        for xx in range(w):
            m[xx, yy] = 0 if px[xx, yy] == marker else 255
    mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1))
    im.putalpha(mask)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im


def main(argv=None):
    p = argparse.ArgumentParser(description="Remove solid background from chapter images")
    p.add_argument("src")
    p.add_argument("dst")
    p.add_argument("--dark", action="store_true",
                   help="Flood-fill near-black edge background (night images)")
    args = p.parse_args(argv)
    im = remove_bg(Image.open(args.src), dark=args.dark)
    im.save(args.dst, optimize=True)
    print(args.dst, im.size)


if __name__ == "__main__":
    main()
