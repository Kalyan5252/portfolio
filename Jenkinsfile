pipeline {
    agent any

    environment {
        IMAGE_NAME = 'portfolio'
        CONTAINER_NAME = 'portfolio'
        APP_PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        -p ${APP_PORT}:3000 \
                        ${IMAGE_NAME}:latest
                    docker image prune -f
                '''
            }
        }
    }

    post {
        success {
            echo "Deployed successfully on port ${APP_PORT}"
        }
        failure {
            echo 'Deployment failed — check Jenkins console output.'
        }
    }
}
