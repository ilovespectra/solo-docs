---
sidebar_position: 7
title: animals & objects
description: detect and search for animals and objects
---

# animals & objects

silo uses object detection to identify animals, objects, and scenes in your photos, making it easy to find specific content.

## object detection

yolo (you only look once) models identify various objects in your images:
- animals (dogs, cats, birds, etc.)
- vehicles (cars, bicycles, boats)
- household items (chairs, laptops, cups)
- outdoor objects (trees, buildings, signs)

## animals section

navigate to the "animals" tab to see detected animal clusters:
- automatically grouped by species
- displays sample images
- shows total count per type

### common animals detected

- dogs (various breeds)
- cats
- birds
- horses
- wildlife (deer, bears, etc.)

### naming animal clusters

similar to face clusters, you can name specific animals:

1. click on an animal cluster
2. enter your pet's name (e.g., "spot", "whiskers")
3. click "save"

now you can search for your pet by name:
- "spot playing fetch"
- "whiskers on the couch"
- "spot and blake at the park"

## known issues

:::caution
the animals section is still in development and has some limitations.
:::

**current issues:**
- some inanimate objects are incorrectly classified as animals
- clustering accuracy varies by species
- rare animals may not be detected

**we're working on:**
- improved classification accuracy
- better cluster separation
- expanded species recognition
- manual correction tools

## object search

even without dedicated tabs, you can search for objects semantically:
- "photos with laptop"
- "bicycle in garage"
- "coffee mug on desk"
- "red car"

## scene detection

silo can also identify scenes and environments:
- indoor vs outdoor
- natural vs urban
- day vs night
- weather conditions

### example searches

- "outdoor sunset"
- "indoor party"
- "snowy mountain"
- "rainy day"

## improving accuracy

### better detection

help improve object detection:
- use well-lit photos
- avoid extreme angles
- ensure objects are clearly visible
- higher resolution images work better

### false positives

if you see incorrect detections:
- they won't affect semantic search accuracy
- clip embeddings still capture true content
- manual corrections coming in future update

## future features

planned improvements:
- manual object tagging
- custom object categories
- training on your specific objects
- improved animal classification
- separate tabs for vehicles, plants, etc.

## settings

adjust object detection settings:
- confidence threshold
- object size minimum
- categories to detect
- enable/disable specific classes
