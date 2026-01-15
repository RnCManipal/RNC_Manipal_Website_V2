# Robotics & Circuits Website — Deployment Guide

## Install dependencies
npm install

## Develop locally
npm run dev

## Deploy (update live website)
1. FIRST Commit + push changes to main
2. ONLY AFTER THE FIRST STEP Run:
   npm run deploy

This builds and deploys the site to `gh-pages` for:
https://roboticsandcircuits.com

## Notes
- Do NOT commit `dist/`
- Source code is on `main`
- Built site is on `gh-pages`
