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
      environment {
        BUCKET_NAME = credentials('bucket-name') 
      }
      steps {
        sh 'aws s3 cp build $BUCKET_NAME --recursive'
      }
    }
  }
}
