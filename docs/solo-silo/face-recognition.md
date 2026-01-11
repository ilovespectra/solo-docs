---
sidebar_position: 6
title: face recognition
description: automatic face detection and clustering
---

# face recognition

silo automatically detects and clusters faces in your photos, making it easy to find pictures of specific people without manual tagging.

## how it works

silo uses a multi-step process for face recognition:

### 1. face detection

yolo and deepface models scan your photos for faces:
- detects multiple faces per image
- works with various angles and lighting
- handles partial faces
- processes videos frame-by-frame

### 2. face embedding

each detected face gets a unique biometric signature:
- 128-dimensional embedding vector
- captures facial features mathematically
- invariant to lighting and angle changes
- enables similarity comparison

### 3. clustering

hdbscan automatically groups similar faces:
- no need to specify number of people
- creates clusters based on similarity
- handles noise and outliers
- adapts to your photo collection

## viewing face clusters

navigate to the "people" tab to see all detected face clusters:
- clusters are displayed as cards
- each card shows representative faces
- click a card to view all photos in that cluster

![people cluster card](/img/solo-silo/peopleclustercard.png)

## cluster details

each cluster card shows:
- sample faces from the cluster
- total number of photos
- cluster id (until you name it)
- confidence score

## naming clusters

add names to clusters for easier searching:

1. click on a cluster card
2. enter the person's name
3. click "save"

now you can:
- search for that person by name
- see their name in search results
- combine with other search terms

## merging clusters

if the same person appears in multiple clusters:

1. select the first cluster
2. click "merge with..."
3. select the second cluster
4. confirm merge

all photos will now be in a single cluster.

## splitting clusters

if multiple people are in one cluster:

:::info
automatic split detection is coming in a future update. currently, you can manually exclude faces.
:::

1. open the cluster
2. review all faces
3. mark incorrect faces
4. click "create new cluster from selection"

## privacy features

face recognition is completely private:
- all processing happens locally
- no face data sent to cloud services
- face embeddings stored in local database
- you can delete clusters anytime

## managing face data

### view face database

go to settings → manage database to see:
- total faces detected
- number of clusters
- database size
- last update time

### delete face data

to remove all face data:
1. go to settings → manage database
2. click "clear face data"
3. confirm deletion

this removes:
- all face embeddings
- all clusters
- face search indexes

your original photos remain untouched.

## accuracy tips

### improve face detection

- use high-resolution photos
- ensure faces are well-lit
- avoid heavily filtered images
- include multiple photos per person

### clustering accuracy

the clustering algorithm improves with:
- more photos per person
- variety of angles and expressions
- consistent lighting
- clear, unobstructed faces

## known limitations

face recognition may struggle with:
- very small faces (distant shots)
- extreme angles or occlusion
- heavy makeup or costumes
- significant age differences
- very similar-looking people

## settings

adjust face recognition settings:
- minimum face size
- detection confidence threshold
- clustering sensitivity
- video frame sampling rate
