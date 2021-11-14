pipeline {
  agent {
    node {
      label 'node1'
    }

  }
  environment {
    CI = false  
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
    stage('Deploy') {
      steps {
        sh "aws s3 cp build ${credentials('bucket-name')} --recursive"
      }
    }
  }
}
