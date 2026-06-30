#!/usr/bin/env bash
set -e

cleanup() {
  echo "Shutting down..."
  kill "$PID" 2>/dev/null
  wait "$PID" 2>/dev/null
  exit 0
}

trap cleanup INT TERM

npm run dev &
PID=$!
wait "$PID"
