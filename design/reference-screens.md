# Reference screen implementations

Five connected UI screens closely follow the user's supplied Finch references. They are accessible from Memories → Explore your world.

- `/focus`: six colored illustrated focus cards; each opens the activities screen.
- `/activities`: pink airplane header and nine activity buttons; local reflection, timer, breathing animation, goal and quiz interactions. Sound selection is a UI preview without connected audio.
- `/wardrobe`: pink room, illustrated character, four-column item grid, filters, favorites, outfit changes, color changes, furniture previews and a micropet tab.
- `/feature`: teal announcement, two birds, goal card and three swipeable slides. Touch gestures and buttons both change slides.
- `/hatch`: blue ray background, Tumtum reveal and replayable egg hatching.

These are frontend previews. Selections and notes are kept only in the current screen's React state and reset after leaving or refreshing. No account, backend, purchase or AI is connected.

## Artwork

Built-in image_gen was used for the character atlas, airplane illustration and pink room. The original PNG files are stored in `public/art/screens/`; the app uses WebP files. Sharp slices the 3-by-2 atlas into its six individual 512-pixel sprite cells without changing their content.

- `public/art/screens/focus-birds-atlas.png`, plus `focus-calm.webp`, `focus-nutrition.webp`, `focus-movement.webp`, `focus-self-kindness.webp`, `focus-sleep.webp`, `focus-connection.webp`.
- `public/art/screens/activities-sky.png` and `.webp`.
- `public/art/screens/wardrobe-room.png` and `.webp`.

The editable wardrobe items, character, announcement birds and Tumtum are native SVG components in `src/components/reference-art.tsx`; these support real selection and color changes rather than being part of a static screenshot.

## Focus atlas prompt

Use case: stylized-concept. Asset: transparent production sprite atlas for six illustrated focus-area cards. Reference: the uploaded screenshot with six colored cards titled Calm, Nutrition, Movement, Self-kindness, Sleep, Connection. Match those purple cartoon bird characters and flat vector-like illustration style closely. Ignore the other uploaded screen layouts. Deliver ONLY character illustrations, not a screenshot, not cards, not text.
Canvas is landscape 3:2, exactly THREE equal-width columns and TWO equal-height rows, six evenly spaced square sprite cells, on a genuinely transparent background. Each character stays strictly inside its own cell, with 8% clear padding on all four edges; no elements crossing cells. Same cute lavender-purple rounded baby finch, darker purple head cap and wings, light lavender face and belly, tiny beak, dark oval eyes, pink-purple cheek circles, flat filled shapes, no outlines, no 3D, no gradients.
Order left-to-right, top-to-bottom: 1 CALM bird eyes closed meditating peacefully; 2 NUTRITION bird cheerfully drinking from a blue glass of water; 3 MOVEMENT bird wearing a green soccer shirt and holding a black-and-white football; 4 SELF-KINDNESS smiling bird hugging a large bright red heart; 5 SLEEP eyes-closed bird hugging an ivory pillow; 6 CONNECTION bird holding a red telephone handset and smiling, small telephone base near its feet. All six birds consistent proportions and individual large readable poses, entire subjects fully visible, filling about 85% of each cell. No labels, no dividers, no colored backgrounds, no watermark.

## Atlas refinement prompt

Edit target: the supplied six-bird sprite atlas. Keep all six poses, props, cell positions, character identities and the 3-column by 2-row arrangement unchanged. Correct ONLY the rendering style and transparency. Remove every purple glow, colored halo, haze, cast shadow, background and soft edge outside the characters. Every pixel outside each character/prop silhouette must be fully transparent, not semitransparent purple. Convert shading inside the subjects into crisp uniform flat filled cartoon shapes like a clean 2D SVG illustration: lavender body, darker purple head cap and wings, pink cheeks; no gradients, highlights or bloom. Keep the red heart, blue cup, green soccer shirt, ivory pillow and red phone. No text. Output genuine transparent alpha cutouts in the same six-cell atlas.

## Airplane prompt

Flat 2D cartoon illustration matching a cozy mobile self-care game: a small cream and brown bird pilot wearing brown aviator goggles and a red scarf flies a yellow and orange propeller airplane to the left. White propeller blades, orange wings, open cockpit, entire plane fully visible and centered. Wide landscape canvas 1.8:1. Dusty pink sky #DC8DB9 with a few pale pink rounded clouds near the edges and small white flying bird silhouettes. Flat crisp filled shapes only, no 3D, no gradients, no glow, no texture, no text or interface. Production header art for an activities page.

## Wardrobe room prompt

Production background illustration for a flat 2D cartoon bird wardrobe screen. Nearly square canvas, 1.1:1 landscape. Recreate a cozy pink bedroom in clean flat filled vector-like shapes: pale peach-pink walls with tiny flowers and botanical decorations, dusty rose floor, wicker bed at left with pink bedding and heart-shaped cushions, a blue-sky window with purple-pink curtains at back left, small pastel bookshelf below it, a pink arched door on the right with orange autumn wreath, a wooden cuckoo clock above it, a pink layered flower-shaped hanging ceiling lamp, a couple of potted plants and tiny string lights on a left wall shelf. A small oval green floral rug at center foreground. Leave the entire center foreground on the rug EMPTY for a character added separately in HTML. The viewpoint is straight on, warm playful mobile-game illustration, minimal outlines, crisp shapes, no 3D rendering, no photographic texture, no gradients, no blur. NO characters, birds, text, labels, icons, buttons, status bar, phone frame, UI, logos or watermark.


## Verification

Production build passes with all five routes statically exported. Browser checks passed at 320, 390, 430, 768 and 1440 pixels, with all images loaded and no horizontal overflow or browser errors. Interactions checked: Memories entry links, focus selection, goal selection, saved reflections, countdown and pause, breathing control, wardrobe search and filters, favorites, outfit/hat/color changes, furniture preview, micropet selection and hatching replay, feature completion and touch swiping. Existing home navigation and the plus menu still work. Phone previews are stored in `previews/`.
