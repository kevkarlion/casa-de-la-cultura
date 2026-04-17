# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When writing Go tests, using teatest, or adding test coverage | go-testing | /home/kriq/.config/opencode/skills/go-testing/SKILL.md |
| When creating a GitHub issue, reporting a bug, or requesting a feature | issue-creation | /home/kriq/.config/opencode/skills/issue-creation/SKILL.md |
| When user says "judgment day", "review adversarial", "dual review", "doble review" | judgment-day | /home/kriq/.config/opencode/skills/judgment-day/SKILL.md |
| PR creation, opening a PR, or preparing changes for review | branch-pr | /home/kriq/.config/opencode/skills/branch-pr/SKILL.md |
| When user asks to create a new skill, add agent instructions, or document patterns | skill-creator | /home/kriq/.config/opencode/skills/skill-creator/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### go-testing
- Use standard Go testing patterns: table-driven tests, subtests for grouping
- For Bubbletea TUI: use teatest library for programmatic testing
- Mock external dependencies with interface injection
- Test file naming: `{file}_test.go` alongside source
- Run specific tests: `go test -run TestName ./...`

### issue-creation
- Issue-first workflow: create issue BEFORE any code changes
- Include bug reproduction steps or feature specification
- Label appropriately: bug, feature, enhancement
- Link related issues

### judgment-day
- Launch two independent blind judges simultaneously
- Synthesize findings, apply fixes, re-judge until both pass
- Escalate after 2 failed iterations
- Do NOT reveal the other judge's identity to each reviewer

### branch-pr
- Branch-first: create branch BEFORE making changes
- Commit with conventional messages
- PR only after branch is ready for review
- Include description, linked issues

### skill-creator
- Follow Agent Skills spec format
- Include frontmatter: name, description, location, trigger
- Document all phases and decision points
- Test skill in isolation before publishing

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| No convention files found | — | Project has no AGENTS.md, .cursorrules, or similar |

Read the convention files listed above for project-specific patterns and rules.