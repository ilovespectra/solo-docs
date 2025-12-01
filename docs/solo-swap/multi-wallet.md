---
sidebar_position: 4
title: multi-wallet functionality
description: create swapping lists from multiple wallets simultaneously
---

# multi-wallet functionality

## adding multiple wallets

### method 1: manual entry
1. click "add wallet" button
2. enter solana wallet address
3. add descriptive label
4. click "add to list"

### method 2: import from file
1. click "import wallets"
2. upload csv file with addresses
3. map columns if necessary
4. review and confirm import

## managing wallet list

### view options
- **combined view**: aggregate totals from all wallets
- **individual view**: see each wallet separately

### wallet operations
- **remove**: delete wallets from list

## multi-wallet swapping

### step 1: token analysis
solo-swap analyzes all wallets to:
- aggregate token holdings across wallets
- calculate pro-rata distributions
- identify optimal swap paths

### step 2: configure swaps
- **global settings**: apply to selected wallets

### step 3: review distribution
view how swaps will be distributed:
- per-wallet allocation
- transaction count
- fee distribution
- expected outcomes

## exporting swapping lists

### copy to clipboard
1. click "copy list" button
2. download `csv`
3. paste into desired application

### download files
1. click "download list"
2. select file format:
   - **csv**: for spreadsheet applications
3. download file

### export formats include:
- wallet addresses and labels
- token symbols and amounts
- swap parameters
- timestamps
- transaction signatures (post-execution)