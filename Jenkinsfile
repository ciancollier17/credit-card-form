pipeline {
  agent {
    node {
      label 'node1'
    }

  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
