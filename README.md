# Ecommerce kubernetes application

## How to setup

Requirement: Nodejs 18+ and Java 17+

For **Nodejs** packages, only need to run `yarn` at the root folder.

For **Java Spring boot** packagaes, run command `yarn install-java` to install all dependencies. 


## How to start
To start the project in development mode, you can use this commands on root folder:

```bash
yarn dev
```

## Infomation

The **Catalog frontend page** runs at `http://localhost:3090/`.

The **Catalog microservice** runs at `http://localhost:8090/`

## Git convention

### Branch name

Each developer has to create their own branch to work on their own user story, and does not allow to push their code directly to `dev`.

Each branch has to follow this naming convention: `<developer-name>/<user story number>-action-you-going-to-do`
Example: `anh/US123-do-sth`.

The developer's name should be in lowercase:
- `hieu`
- `phat`
- `anh`

The **user story number** **MUST** be the number of US you are working on. For the modifying activity, the US number should be the number of US for that activity (if that US exists), or the number of US that you modify.

### Pull request name

Developers want to make change to `dev`, they need to create pull request to merge their work to the `dev` branch.

Each pull request **MUST** following this naming convention: `[<user story number>] action you going to do.` 
Example: `[US123] add new documents to the beginning section`.

The ***user story number*** **MUST** be the same with the one the developer used to name their branch.

The description for the PR should be more detailed than the one in the branch's name, and should align with the description of the user story.

### Merging PRs

#### Approvals

Each pull request needs to have **2 approvals** before merging into `dev`.

The number of approvals will be reset whenever the owner push a new commit to remote.

#### Merging action

All PRs **MUST** `Squash and merge` to the `dev` branch. The commit messgae has to be the same as the PR's name.