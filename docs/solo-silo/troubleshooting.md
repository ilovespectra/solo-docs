---
sidebar_position: 10
title: troubleshooting
description: common issues and solutions
---

# troubleshooting

common issues and their solutions when using solo-silo.

## installation issues

### script won't execute

**problem**: `./start-all.sh` fails with "permission denied"

**solution**: make the script executable:
```bash
chmod +x start-all.sh
./start-all.sh
```

### missing dependencies

**problem**: errors about missing python packages or node modules

**solution**: manually install dependencies:
```bash
# install node dependencies
npm install

# install python dependencies
cd backend
pip install -r requirements.txt
```

### model download fails

**problem**: ai models fail to download

**solution**:
1. check your internet connection
2. ensure you have ~2gb free disk space
3. try downloading models manually
4. check firewall settings

### port already in use

**problem**: "port 3000 already in use" or "port 8000 already in use"

**solution**: kill processes using those ports:
```bash
# find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# find and kill process on port 8000
lsof -ti:8000 | xargs kill -9
```

then restart:
```bash
./start-all.sh
```

## indexing issues

### indexing is slow

**problem**: indexing takes very long

**solution**:
- reduce batch size in settings
- close other applications
- ensure sufficient ram available
- check disk speed (ssd vs hdd)
- disable unnecessary detection options

### indexing stops/crashes

**problem**: indexing stops midway or application crashes

**solution**:
1. check available disk space
2. monitor memory usage
3. reduce batch size
4. restart and resume indexing
5. check error logs in console

### files not detected

**problem**: some files aren't being indexed

**solution**:
- verify file format is supported
- check file permissions
- ensure files aren't corrupted
- look for hidden files exclusion
- check console for error messages

### duplicate files indexed

**problem**: same files appearing multiple times

**solution**:
1. check if files exist in multiple sources
2. clear database and re-index
3. remove duplicate sources

## search issues

### search returns no results

**problem**: searches don't find anything

**solution**:
1. ensure indexing completed successfully
2. try broader search terms
3. check if models downloaded correctly
4. rebuild search index in settings
5. verify files were actually indexed

### search results not relevant

**problem**: results don't match the query

**solution**:
- use more specific search terms
- try different phrasing
- ensure clip models loaded correctly
- check if images are clear/high quality
- adjust similarity threshold in settings

### search is slow

**problem**: searches take a long time

**solution**:
- rebuild search index
- reduce results per page
- clear cache
- ensure ssd for database storage
- check cpu/gpu usage

## face recognition issues

### faces not detected

**problem**: photos with faces show no detections

**solution**:
- ensure face detection is enabled in source settings
- check if faces are large enough in image
- verify images are well-lit
- try reprocessing with higher sensitivity
- check if deepface models loaded

### incorrect clustering

**problem**: same person in multiple clusters or wrong grouping

**solution**:
- use merge clusters feature
- adjust clustering sensitivity in settings
- ensure enough photos per person
- use photos with clear, frontal faces
- manually split incorrectly grouped clusters

### named searches don't work

**problem**: searching for named people returns no results

**solution**:
1. verify cluster was actually named
2. check spelling of name
3. ensure cluster has processed images
4. try refreshing the page
5. rebuild search index

## performance issues

### high memory usage

**problem**: silo uses too much ram

**solution**:
- reduce batch size
- lower memory limit in settings
- close other applications
- reduce cache size
- disable gpu acceleration if problematic

### high cpu usage

**problem**: cpu at 100% constantly

**solution**:
- reduce number of cpu threads in settings
- lower batch size
- pause indexing when not needed
- check for background processes

### application freezes

**problem**: ui becomes unresponsive

**solution**:
1. wait for current operation to complete
2. check if indexing is running
3. restart application
4. reduce performance settings
5. check system resources

## database issues

### database corrupted

**problem**: errors about database corruption

**solution**:
1. restore from backup if available
2. try rebuilding indexes
3. clear database and re-index
4. ensure proper shutdown (don't force quit)

### database too large

**problem**: database using excessive disk space

**solution**:
- clear old cache files
- reduce thumbnail quality
- remove unused silos
- check for stuck temporary files

### can't access database

**problem**: permission errors accessing database

**solution**:
- check folder permissions
- ensure not running multiple instances
- verify database not locked by another process
- restart with proper permissions

## ui/display issues

### images not loading

**problem**: thumbnails or full images don't display

**solution**:
- check if files still exist at source
- verify file permissions
- clear browser cache
- rebuild thumbnail cache
- check console for errors

### layout broken

**problem**: ui elements misaligned or overlapping

**solution**:
- refresh the page
- clear browser cache
- try different browser
- check browser zoom level
- update to latest version

### dark mode issues

**problem**: elements not visible or poorly contrasted

**solution**:
- toggle dark mode off and on
- clear cache and reload
- report specific issues on github

## getting help

### check logs

view detailed logs:
- frontend: browser console (f12)
- backend: terminal output
- error logs: `.local/logs/`

### gather information

when reporting issues, include:
- operating system and version
- node.js and python versions
- error messages (full text)
- steps to reproduce
- screenshots if relevant

### report bug

create an issue on github with:
1. clear description
2. reproduction steps
3. expected behavior
4. actual behavior
5. system information
6. relevant logs

### community support

get help from the community:
- search existing github issues
- ask in github discussions
- check documentation
- review recent pull requests

## preventive maintenance

### regular tasks

keep silo running smoothly:
- backup database regularly
- clear cache periodically
- update to latest version
- monitor disk space
- review error logs

### best practices

- don't force quit during indexing
- ensure stable power during long operations
- use ssd for better performance
- keep system updated
- maintain sufficient free space
