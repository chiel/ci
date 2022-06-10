# chiel/action-get-jobs

This action is published to [chiel/action-get-jobs](https://github.com/chiel/action-get-jobs). But maintained in the [chiel/ci](https://github.com/chiel/ci/tree/master/.github/actions/get-jobs) repo in order to keep all shared CI-related stuff in one place.

It takes a comma-separated list of package names and outputs an object of jobs and which packages to run those jobs for - this can then be used to execute those jobs [using a matrix](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#example-using-contexts-to-create-matrices).
