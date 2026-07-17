# Pulumi Cloud API

REST API gateway for Pulumi Cloud serving stack operations, deployments, insights, and webhooks.

**Tech Stack**: Go 1.22, Gin framework, PostgreSQL, Redis, OpenTelemetry

**Run Locally**: `go run cmd/api/main.go` (requires Postgres, Redis, and auth service)