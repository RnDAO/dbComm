# dbComm

All interactions with DB

## Features

### Linter

The CI Pipeline uses [super-linter](https://github.com/super-linter/super-linter). You can run it locally with the following command:

```bash
docker run -e RUN_LOCAL=true -e TYPESCRIPT_DEFAULT_STYLE=prettier -e VALIDATE_DOCKERFILE_HADOLINT=false -v $(pwd):/tmp/lint github/super-linter:slim-latest
```

```bash
Windows: docker run -e RUN_LOCAL=true -e TYPESCRIPT_DEFAULT_STYLE=prettier -e VALIDATE_DOCKERFILE_HADOLINT=false -v "$(Resolve-Path .):/tmp/lint" github/super-linter:slim-latest
```

Note: We have disabled HADOLINT for now as we are getting an error: `qemu: uncaught target signal 11 (Segmentation fault) - core dumped`.

[![Maintainability](https://api.codeclimate.com/v1/badges/52d516c2ad7c262adb37/maintainability)](https://codeclimate.com/github/RnDAO/tc-dbComm/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/52d516c2ad7c262adb37/test_coverage)](https://codeclimate.com/github/RnDAO/tc-dbComm/test_coverage)


### Tests

The CI Pipeline uses the `test` target from the Dockerfile to run the tests. You can run it locally with the following command:

```bash
docker compose -f docker-compose.test.yml up --exit-code-from app --build
```

Note: This will create a /coverage folder where you can review the coverage details.

### Schema for rawinfo

```ts
rawinfo {
  type: number,
  author: Snowflake,
  content: string,
  createdDate: Date,
  user_mentions: Array<Snowflake>,
  role_mentions: Array<Snowflake>,
  reactions: Array<Snowflake>,
  replied_user: Snowflake | null | undefined,
  messageId: Snowflake,
  channelId: Snowflake,
  channelName: string | null,
  threadId: Snowflake | null,
  threadName: string | null,
}
```

### Schema for user

```ts
User {
    discordId: Snowflake,
    username?: string,
    discriminator?: string,
    avatar?: string,
    bot?: boolean,
    system?: boolean,
    mfa_enabled?: boolean,
    banner?: string,
    accent_color?: number
    locale?: string,
    verified?: boolean
    email?: string,
    flags?: number,
    premium_type?: number,
    public_flags?: number,
}
```

### Schema for heatmap

```ts
HeatMap {
    date?: string,(format: "YYYY-MM-DD")
    thr_messages: Array<number>,
    lone_messages: Array<number>,
    replier: Array<number>,
    replied_per_acc: Array<objects> [{account: "account name", count: "count of reply"}],
    replied: Array<number>,
    mentioner: Array<number>,
    mentioner_per_acc: Array<objects> [{account: "account name", count: "count of mention"}],
    mentioned: Array<number>,
    reacter: Array<number>,
    reacted_per_acc: Array<objects> [{account: "account name", count: "count of reaction"}],
    reacted: Array<number>,
    channelId: string,
    account_name: string
}
```

### Schema for guildMembers

```ts
GuildMember {
  discordId: Snowflake,
  username: string,
  avatar?: string | null,
  roles: Snowflake[],
  joinedAt: Date | null,
  isBot?: boolean,
  discriminator: string
}

```

### Schema for memberactivities

```ts
memberactivities {
    date: Date,
    all_active: Array<string>,
    all_consistent: Array<string>,
    all_vital: Array<string>,
    all_connected: Array<string>,
    all_paused: Array<string>,
    all_new_disengaged: Array<string>,
    all_disengaged: Array<string>,
    all_unpaused: Array<string>,
    all_returned: Array<string>,
    all_new_active: Array<string>,
    all_still_active: Array<string>,
    all_dropped: Array<string>,
    all_joined: Array<string>,
    all_disengaged_were_newly_active: Array<string>,
    all_disengaged_were_consistently_active: Array<string>,
    all_disengaged_were_vital: Array<string>,
    all_lurker: Array<string>,
    all_about_to_disengage: Array<string>,
    all_disengaged_in_past: Array<string>,
    all_joined_day: Array<string>,

}
```

### Schema for channels

```ts
Channels {
    channel: string,
    channelId: Snowflake,
    last_update: Date
}
```

### Schema for token

```ts
Token {
    token: string,
    user: Snowflake,
    type: string,
    expires: Date,
    blacklisted?: boolean
}
```

### Schema for guild

```ts
Guild {
    guildId: Snowflake,
    user: Snowflake,
    name?: string,
    connectedAt?: Date,
    isInProgress?: Boolean,
    isDisconnected?: Boolean,
    icon?: string,
    selectedChannels?: Array<objects> [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    aciton: Array<number>,
    window: Array<number>
}
```

### Schema for channel

```ts
Channel {
    id: Snowflake,
    name?: string | null,
    parent_id?: string | null,
}
```


### Schema for role

```ts
Role {
    id: Snowflake,
    name: string,
    color: number,
}
```
