#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "Starting LoneTree preview..."
echo
echo "Open this address after the server starts:"
echo "http://127.0.0.1:4173/"
echo
echo "Keep this window open while previewing."
echo

python3 -m http.server 4173 --bind 127.0.0.1
