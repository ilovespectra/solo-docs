---
sidebar_position: 5
title: semantic search
description: find photos using natural language
---

# semantic search

semantic search allows you to find photos using natural language descriptions instead of relying on manual tags or filenames.

## how it works

silo uses clip (contrastive language-image pre-training) to understand the content of your images:
1. clip generates embeddings for each image
2. your search query is converted to an embedding
3. faiss finds the most similar images
4. results are ranked by relevance

## search types

### visual search

describe what you see in the image:
- "sunset over mountains"
- "dogs playing in snow"
- "person wearing red shirt"
- "trees in autumn"
- "camper in the forest"
- "husky dog"

![search example: trees](/img/solo-silo/search-trees.png)

![search example: camper](/img/solo-silo/search-camper.png)

![search example: husky](/img/solo-silo/search-husky.png)

### activity search

search for actions and activities:
- "people dancing"
- "kids playing soccer"
- "cooking in kitchen"
- "swimming in pool"

### location search

find photos by location type:
- "beach photos"
- "mountain hiking"
- "city skyline"
- "indoor restaurant"

### object search

search for specific objects:
- "laptop on desk"
- "coffee mug"
- "bicycle"
- "flowers in vase"

## named cluster search

once you've named people and animal clusters, you can search for them specifically:

### naming clusters

1. go to the "people" or "animals" tab
2. click on a cluster card
3. enter a name (e.g., "blake", "spot")
4. click save

### searching named clusters

now you can search using those names:
- "blake and spot on the beach"
- "spot playing in the yard"
- "blake at birthday party"

combine names with activities, locations, and objects for powerful searches:
- "blake and grandma baking cookies"
- "spot running in the park"
- "family photo with everyone"

## search tips

### be specific

more specific queries yield better results:
- ❌ "outside"
- ✅ "mountain landscape with snow"

### use descriptive words

include visual details:
- ❌ "party"
- ✅ "birthday party with cake and balloons"

### combine concepts

mix multiple search terms:
- "black cat on wooden table"
- "sunset over ocean with palm trees"
- "group of people hiking in forest"

### try variations

if you don't find what you're looking for:
- "dog" → "puppy", "canine", "pet"
- "car" → "vehicle", "automobile"
- "beach" → "ocean", "seaside", "coast"

## search results

results are displayed as a grid of thumbnails:
- click any image to view full size
- scroll to load more results
- results are sorted by relevance score

## limitations

semantic search works best for:
- clear, well-lit images
- recognizable objects and scenes
- common activities and locations

it may struggle with:
- abstract art
- very dark or blurry images
- highly specific technical content
- images with minimal visual information

## text search

silo also searches text extracted via ocr:
- search for text visible in images
- find screenshots with specific content
- locate documents by visible text

example searches:
- "text containing invoice"
- "sign that says coffee shop"
- "handwritten note"
