#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

fail=0

print_ok() {
  echo "OK  - $1"
}

print_warn() {
  echo "WARN- $1"
}

print_fail() {
  echo "FAIL- $1"
  fail=1
}

if [[ -f ".env" ]]; then
  print_ok "prismic-next/.env exists"
else
  print_warn "prismic-next/.env missing (copy from .env.example)"
fi

if [[ -f "slicemachine.config.json" ]]; then
  print_ok "slicemachine.config.json present"
else
  print_fail "slicemachine.config.json missing"
fi

if [[ -d "customtypes" ]]; then
  print_ok "customtypes directory present"
else
  print_fail "customtypes directory missing"
fi

if [[ -d "src/slices" ]]; then
  print_ok "src/slices directory present"
else
  print_fail "src/slices directory missing"
fi

if [[ -f ".env" ]]; then
  if grep -q "^NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME=" .env; then
    print_ok "NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME set"
  else
    print_warn "NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME not set"
  fi

  if grep -q "^PRISMIC_ACCESS_TOKEN=" .env; then
    print_ok "PRISMIC_ACCESS_TOKEN present (may be empty)"
  else
    print_warn "PRISMIC_ACCESS_TOKEN missing"
  fi
fi

if command -v curl >/dev/null 2>&1; then
  if curl -sSf "http://localhost:3000" >/dev/null 2>&1; then
    print_ok "Local dev server reachable (http://localhost:3000)"
  else
    print_warn "Local dev server not reachable"
  fi
else
  print_warn "curl not available; skipping local server check"
fi

if [[ $fail -eq 1 ]]; then
  echo "\nStack health: FAIL"
  exit 1
fi

echo "\nStack health: OK"
