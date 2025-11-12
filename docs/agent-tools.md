# Agent System Tools Documentation

This document provides a comprehensive reference for all tools available in the agent system. These tools enable automated workflows for issue management, code changes, and email communication.

## Table of Contents

- [Linear Issue Management Tools](#linear-issue-management-tools)
- [Cursor Agent Tools](#cursor-agent-tools)
- [Email Management Tools](#email-management-tools)

---

## Linear Issue Management Tools

Tools for managing issues in Linear, including creating, updating, searching, and retrieving issue information.

### `get_my_issues`

**Description:** Retrieve all issues assigned to the current user.

**Parameters:** None

**Usage:** Use this tool to get an overview of all tasks currently assigned to you.

---

### `get_issue`

**Description:** Get detailed information about a specific issue.

**Parameters:**
- `identifier` (required): The issue identifier (e.g., "ENG-123", "VIC-169")

**Usage:** Use this tool when you need to retrieve details about a specific issue by its identifier.

**Example:**
```
get_issue(identifier="VIC-169")
```

---

### `create_issue`

**Description:** Create a new issue in Linear.

**Parameters:**
- `teamId` (required): The ID of the team to create the issue for
- `title` (required): The title of the issue
- `description` (optional): A detailed description of the issue
- `priority` (optional): The priority level of the issue

**Usage:** Use this tool to create new issues programmatically.

**Example:**
```
create_issue(
  teamId="team_abc123",
  title="Fix login bug",
  description="Users are unable to login after password reset",
  priority="high"
)
```

---

### `update_issue`

**Description:** Update an existing issue in Linear.

**Parameters:**
- `identifier` (required): The issue identifier to update (e.g., "ENG-123")
- `title` (optional): New title for the issue
- `description` (optional): New description for the issue
- `priority` (optional): New priority level for the issue

**Usage:** Use this tool to modify existing issues.

**Example:**
```
update_issue(
  identifier="VIC-169",
  priority="urgent",
  description="Updated requirements for documentation"
)
```

---

### `search_issues`

**Description:** Search for issues using a query string.

**Parameters:**
- `query` (required): The search query string

**Usage:** Use this tool to find issues based on text search.

**Example:**
```
search_issues(query="documentation")
```

---

### `list_teams`

**Description:** Get a list of all teams in Linear.

**Parameters:** None

**Usage:** Use this tool to discover available teams, which is helpful when creating new issues.

---

## Cursor Agent Tools

Tools for launching and managing Cursor cloud agents that can make code changes autonomously.

### `launch_cursor_agent`

**Description:** Launch a Cursor cloud agent to work on code changes.

**Parameters:**
- `prompt` (required): Instructions for the agent, including the Linear issue code (e.g., "VIC-123: Implement new feature")
- `model` (optional): The AI model to use for the agent
- `ref` (optional): Git reference (branch, commit, or tag) to work from

**Usage:** Use this tool to start an automated code change workflow. The prompt should include the Linear issue identifier for tracking.

**Example:**
```
launch_cursor_agent(
  prompt="VIC-169: Create documentation listing all available tools",
  model="claude-3-sonnet",
  ref="main"
)
```

---

### `get_cursor_agent_status`

**Description:** Check the current status of a running Cursor agent.

**Parameters:**
- `agentId` (required): The unique identifier of the agent

**Usage:** Use this tool to monitor the progress of an agent task.

**Example:**
```
get_cursor_agent_status(agentId="agent_xyz789")
```

---

### `add_followup_to_cursor_agent`

**Description:** Add additional instructions or corrections to a running agent.

**Parameters:**
- `agentId` (required): The unique identifier of the agent
- `prompt` (required): Additional instructions or followup task

**Usage:** Use this tool when you need to provide clarification or additional requirements to an active agent.

**Example:**
```
add_followup_to_cursor_agent(
  agentId="agent_xyz789",
  prompt="Also add examples for each tool"
)
```

---

### `list_cursor_agents`

**Description:** List all Cursor agents (past and present).

**Parameters:** None

**Usage:** Use this tool to see all agents that have been launched.

---

### `get_cursor_agent_conversation`

**Description:** Retrieve the full conversation history of a Cursor agent.

**Parameters:**
- `agentId` (required): The unique identifier of the agent

**Usage:** Use this tool to review what an agent has done, including all messages and responses.

**Example:**
```
get_cursor_agent_conversation(agentId="agent_xyz789")
```

---

## Email Management Tools

Tools for managing email communication, including sending, replying, drafting, and listing emails.

### `send_email`

**Description:** Send an email message.

**Parameters:**
- `to` (optional): Recipient email address(es)
- `text` (optional): Plain text content of the email
- `html` (optional): HTML content of the email
- `cc` (optional): CC recipient email address(es)
- `replyTo` (optional): Reply-to email address
- `attachments` (optional): File attachments

**Usage:** Use this tool to send email messages directly.

**Example:**
```
send_email(
  to="user@example.com",
  text="Hello, this is a test email.",
  cc="manager@example.com"
)
```

---

### `reply_to_email`

**Description:** Reply to an existing email message.

**⚠️ IMPORTANT:** The `messageId` parameter must be the `id` field from `list_emails`, NOT the `thread_id`.

**Parameters:**
- `messageId` (required): The ID of the message to reply to (use the 'id' field, not 'thread_id')
- `message` (required): The reply message content
- `cc` (optional): CC recipient email address(es)
- `replyTo` (optional): Reply-to email address

**Usage:** Use this tool to reply to emails in existing conversations.

**Example:**
```
reply_to_email(
  messageId="msg_abc123",
  message="Thank you for your email. I'll review this shortly."
)
```

---

### `list_emails`

**Description:** List email messages with optional filtering.

**Parameters:**
- `limit` (optional): Maximum number of emails to retrieve
- `ascending` (optional): Sort order (true for oldest first, false for newest first)
- `before` (optional): Only return emails before this date/time
- `after` (optional): Only return emails after this date/time
- `pageToken` (optional): Token for pagination

**Usage:** Use this tool to retrieve and browse email messages.

**Example:**
```
list_emails(limit=50, ascending=false)
```

---

### `create_draft`

**Description:** Create a draft email without sending it.

**Parameters:**
- `to` (optional): Recipient email address(es)
- `text` (optional): Plain text content of the draft
- `html` (optional): HTML content of the draft
- `cc` (optional): CC recipient email address(es)
- `replyTo` (optional): Reply-to email address
- `attachments` (optional): File attachments

**Usage:** Use this tool to prepare an email for review before sending.

**Example:**
```
create_draft(
  to="team@example.com",
  text="Draft of weekly update email...",
  cc="manager@example.com"
)
```

---

### `send_draft`

**Description:** Send a previously created draft email.

**Parameters:**
- `draftId` (required): The ID of the draft to send

**Usage:** Use this tool to send a draft that was previously created and reviewed.

**Example:**
```
send_draft(draftId="draft_xyz456")
```

---

### `update_draft`

**Description:** Update an existing draft email.

**Parameters:**
- `draftId` (required): The ID of the draft to update
- `to` (optional): Updated recipient email address(es)
- `text` (optional): Updated plain text content
- `html` (optional): Updated HTML content
- `cc` (optional): Updated CC recipient email address(es)
- `replyTo` (optional): Updated reply-to email address
- `attachments` (optional): Updated file attachments

**Usage:** Use this tool to modify a draft before sending.

**Example:**
```
update_draft(
  draftId="draft_xyz456",
  text="Updated draft content..."
)
```

---

### `list_drafts`

**Description:** List draft emails with optional filtering.

**Parameters:**
- `limit` (optional): Maximum number of drafts to retrieve
- `ascending` (optional): Sort order (true for oldest first, false for newest first)
- `before` (optional): Only return drafts created before this date/time
- `after` (optional): Only return drafts created after this date/time
- `pageToken` (optional): Token for pagination

**Usage:** Use this tool to retrieve and browse draft emails.

**Example:**
```
list_drafts(limit=20)
```

---

## Notes and Best Practices

### General Guidelines

- Always include Linear issue identifiers (e.g., "VIC-123") in prompts when launching Cursor agents for proper tracking
- When replying to emails, always use the `id` field from `list_emails`, not the `thread_id`
- Use optional parameters to provide more context and improve tool effectiveness
- Review agent status regularly when using Cursor agents for long-running tasks

### Error Handling

- If a tool fails due to missing required parameters, ensure all required fields are provided
- For email operations, verify email addresses are properly formatted
- For Linear operations, ensure issue identifiers follow the correct format (TEAM-NUMBER)

### Security

- Be cautious when sending emails with sensitive information
- Review drafts before sending when dealing with important communications
- Ensure proper permissions are in place when creating or updating issues

---

*Last updated: 2025-11-12*
