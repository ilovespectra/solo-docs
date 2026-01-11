---
sidebar_position: 4
title: managing silos
description: organize your photo collections with multiple silos
---

# managing silos

silos are separate collections that keep different photo libraries organized. each silo has its own index, database, and settings.

## what is a silo?

a silo is an isolated environment containing:
- indexed media files
- ai-generated embeddings
- face clusters
- search indexes
- custom settings

## use cases for multiple silos

create separate silos to:
- keep work and personal photos separate
- organize by time period (2020 photos, 2021 photos, etc.)
- separate family members' photo collections
- maintain different privacy levels
- organize by event or project

## creating a new silo

1. click on the silo name in the top navigation
2. select "manage silos" from the dropdown
3. click "create new silo"
4. enter a name for your silo
5. choose initial settings (optional)

![manage silos](/img/solo-silo/managesilos.png)

## renaming a silo

1. go to "manage silos"
2. click on the silo you want to rename
3. click the edit icon
4. enter the new name
5. click "save"

## switching between silos

1. click on the current silo name in the top navigation
2. select the silo you want to switch to from the list
3. the interface will reload with the selected silo's data

## silo settings

each silo can have its own:
- indexing preferences
- search settings
- face clustering sensitivity
- storage location
- backup schedule

## deleting a silo

:::caution
deleting a silo removes all indexed data. your original files remain untouched.
:::

to delete a silo:
1. go to "manage silos"
2. click on the silo you want to delete
3. click the delete icon
4. confirm deletion

this removes:
- all indexed data
- face clusters
- search indexes
- settings

your original source files are never deleted.

## exporting a silo

you can export your silo data for backup or to move to another device:

1. go to settings → manage database
2. locate the export section
3. choose what to export:
   - full database (includes all embeddings and indexes)
   - faces and clusters only
   - configuration and settings
4. select export location
5. click "export silo"

the export creates a compressed archive containing:
- indexed data and embeddings
- face clusters and people names
- search indexes
- silo settings and preferences

your original source files are not included in the export.
