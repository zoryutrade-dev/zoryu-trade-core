# Core Rules

This directory contains **pure domain logic**.

Not allowed:
- HTTP clients
- database clients
- Solana wallet/web3 code
- file system access
- environment variable reads

Allowed:
- deterministic computations
- validation logic
- state machines
- pure mapping functions
