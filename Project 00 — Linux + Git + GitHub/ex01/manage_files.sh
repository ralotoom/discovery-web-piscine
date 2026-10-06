#!/bin/bash
touch draft.txt
echo "First line of draft" > draft.txt
echo "Second line of draft" >> draft.txt
cat draft.txt
cp draft.txt draft_backup.txt
mv draft_backup.txt final_report.txt
touch temp_file.txt
rm temp_file.txt
