# Resizer (largely in JavaScript)

A utility for bulk resizing images, built to be distributed via AWS.

The pieces are:
* lambda service - a script for managing and performing the actual image resizing
* web server - a nodeJs-based service for setting up and managing user accounts and jobs
* cli - a command-line interface for managing jobs and uploading images
