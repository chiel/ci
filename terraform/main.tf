resource "github_repository" "ci" {
  name                   = "ci"
  visibility             = "public"
  delete_branch_on_merge = true
  has_downloads          = false
  has_issues             = true
  has_projects           = false
  has_wiki               = false
}

resource "tls_private_key" "ci_deploy_key" {
  algorithm = "ED25519"
}

resource "github_actions_secret" "ci_deploy_key" {
  repository      = github_repository.ci.name
  secret_name     = "DEPLOY_PRIVATE_KEY"
  plaintext_value = tls_private_key.ci_deploy_key.private_key_openssh
}

# chiel/action-get-jobs
resource "github_repository" "action_get_jobs" {
  name       = "action-get-jobs"
  visibility = "public"
  auto_init  = true
}

resource "github_repository_deploy_key" "action_get_jobs" {
  title      = "CI repository"
  repository = github_repository.action_get_jobs.name
  key        = tls_private_key.ci_deploy_key.public_key_openssh
  read_only  = false
}

resource "github_repository_file" "action_get_jobs_readme" {
  repository          = github_repository.action_get_jobs.name
  file                = "README.md"
  overwrite_on_create = true

  content = <<-EOT
  # chiel/action-get-jobs

  While this action is published to this repo for ease-of-use, it is maintained in the [chiel/ci](https://github.com/chiel/ci/tree/master/.github/actions/get-jobs) repo. Please refer there for a proper README. :)
  EOT
}
