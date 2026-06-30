Stop the dev server by killing any running Next.js / dev.sh processes.

```bash
pkill -f "next dev" 2>/dev/null; pkill -f "dev.sh" 2>/dev/null; echo "Server stopped."
```

Confirm the processes are no longer running.
