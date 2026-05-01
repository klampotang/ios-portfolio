---
layout: ../../layouts/BaseLayout.astro
title: "Case Study: Reels Creation Performance Overhaul"
description: "How I improved media editor startup and responsiveness in Instagram's iOS creation flow."
---

# Reels Creation Performance Overhaul

## Context
Instagram's iOS Reels creator had become increasingly feature-rich, but startup latency and frame pacing were trending in the wrong direction, especially on older devices.

## Goal
Improve perceived and measured creation performance while preserving feature parity and creator quality.

## My Role
- Led the iOS technical strategy for startup-path optimization.
- Partnered with infra and product engineers to prioritize user-impactful fixes.
- Instrumented performance metrics for decision-making and regression prevention.

## What I Did
- Mapped critical-path work during editor launch and deferred non-blocking tasks.
- Reduced unnecessary media pipeline re-initialization through lifecycle tightening.
- Added targeted tracing to isolate hot paths in render and decode stages.
- Collaborated with backend/data peers to validate end-to-end creation funnel impact.

## Outcome
- Improved median editor startup time.
- Reduced dropped-frame events during first interactions.
- Increased confidence in ongoing launch by adding guardrail metrics.

## Takeaways
Performance work is most effective when paired with product telemetry and ownership boundaries that prevent regressions.
