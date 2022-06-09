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
