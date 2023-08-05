pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_cred')
        AZURE_SERVICE_NAME = 'crud-app-api'
    }
    
    stages {
        stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/FT/add-auth-jwt']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Chamathr/typescript-crud-app-api.git']]])
            }
        }
        
        stage('Dockr Build & Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub_cred') {
                    bat 'docker build -t crud-api:stg .'
                    bat 'docker tag crud-api:stg chamathranaweera/crud-api:stg'
                    bat 'docker push chamathranaweera/crud-api:stg'
                }
                }
            }
        }
    }
    
    post {
        always {
            bat 'docker logout'
        }
    }
}
