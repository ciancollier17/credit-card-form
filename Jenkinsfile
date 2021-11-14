pipeline {
  agent {
    node {
      label 'node1'
    }

  }
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/ciancollier17/credit-card-form.git', branch: 'master')
      }
    }

  }
}