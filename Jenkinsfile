pipeline {
  agent {
    node {
      label 'node1'
    }

  }
  environment {
    'CI' = false  
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
