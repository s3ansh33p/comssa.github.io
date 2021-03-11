#!/usr/bin/env bash

for file in $1/*; do
    echo fixing ${file}...
    aspectcrop -a 2:1 $file $file
    convert $file -resize 1079x540 $file
done
