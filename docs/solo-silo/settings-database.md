---
sidebar_position: 8
title: settings & database
description: configure silo and manage your database
---

# settings & database

configure silo's behavior and manage your local database through the settings page.

## accessing settings

click the settings icon in the navigation menu to access:
- database management
- indexing preferences
- search settings
- privacy options
- storage configuration

## database management

### database overview

view key statistics about your silo:
- total files indexed
- database size
- faces detected
- clusters created
- last indexing date

![manage database](/img/solo-silo/settings-managedatabase.png)

### database location

your silo database is stored locally:
- sqlite database file
- faiss vector indexes
- face embeddings
- file metadata

default location: `.local/silo-db/`

### clear database

remove all indexed data while keeping settings:

1. go to settings → manage database
2. click "clear database"
3. confirm action

:::caution
this removes all indexed data but keeps your settings. your original files are never touched.
:::

### backup database

:::info
automatic backup is coming in a future update.
:::

manual backup:
1. locate your database folder
2. copy the entire `.local/silo-db/` directory
3. store in a safe location

### restore database

to restore from backup:
1. stop silo
2. replace `.local/silo-db/` with backup
3. restart silo

## indexing preferences

### auto-indexing

configure automatic re-indexing:
- **on startup**: check for new files on launch
- **scheduled**: daily, weekly, or monthly scans
- **watch folders**: monitor sources for changes

### indexing options

customize what gets indexed:
- **face detection**: enable/disable face scanning
- **object detection**: toggle object recognition
- **ocr**: enable text extraction
- **audio transcription**: process audio/video

### performance settings

adjust resource usage:
- **batch size**: files processed simultaneously
- **cpu threads**: number of cores to use
- **gpu acceleration**: enable if available
- **memory limit**: maximum ram usage

## search settings

### search behavior

configure how search works:
- **results per page**: 20, 50, 100, or unlimited
- **similarity threshold**: minimum relevance score
- **include metadata**: search file names and dates
- **search thumbnails**: use smaller images for speed

### search index

manage search performance:
- **rebuild index**: refresh faiss indexes
- **optimize**: compact and speed up searches
- **cache size**: memory allocated for search cache

## privacy options

### data collection

silo never collects user data, but you can control:
- **error reporting**: send crash reports (local only)
- **usage analytics**: track feature usage (local only)
- **update checks**: check for new versions

### security

protect your silo:
- **password protection**: require password to open silo
- **auto-lock**: lock after inactivity
- **encrypt database**: encrypt local database files

:::info
password protection and encryption are coming in a future update.
:::

## storage configuration

### storage location

configure where silo stores data:
- **database**: sqlite and faiss indexes
- **thumbnails**: preview images
- **cache**: temporary processing files
- **models**: downloaded ai models

### storage limits

set maximum storage usage:
- **thumbnail size**: quality vs space tradeoff
- **cache limit**: temporary file maximum
- **auto-cleanup**: remove old cache files

## advanced settings

### developer options

for advanced users:
- **debug mode**: verbose logging
- **api access**: enable local api
- **custom models**: use alternative ai models
- **experimental features**: test new functionality

### reset settings

restore default settings:
1. go to settings → advanced
2. click "reset to defaults"
3. confirm action

this resets:
- all preferences
- search settings
- indexing options

it does not delete:
- indexed data
- face clusters
- source configurations

## troubleshooting

### database issues

if you experience database problems:

1. **check disk space**: ensure sufficient storage
2. **verify permissions**: check folder access rights
3. **rebuild index**: refresh search indexes
4. **clear cache**: remove temporary files

### performance issues

if silo is running slowly:

1. reduce batch size in settings
2. disable gpu if causing issues
3. lower memory limit
4. reduce results per page
5. clear old cache files

### corruption recovery

if database becomes corrupted:

1. try rebuilding indexes first
2. restore from backup if available
3. clear database and re-index as last resort

## updates

### checking for updates

silo can check for updates:
- manually in settings
- automatically on startup
- notification when available

### update process

to update silo:
1. backup your database
2. stop silo
3. pull latest code: `git pull`
4. restart using `./start-all.sh`

your data and settings are preserved during updates.
