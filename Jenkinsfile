pipeline {
    agent any

    environment {
        APP_NAME = 'lifecycle-lab'
        BUILD_DIR = 'target'   // or 'build', 'dist' for your project
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm install && npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
            post {
                always {
                    junit allowEmptyResults: true, testResults: '**/target/surefire-reports/*.xml'
                }
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'target/*.jar', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                bat 'if exist build ( xcopy /E /I /Y build C:\\temp\\deployed-app )'
                echo 'Application deployed to C:\\temp\\deployed-app'
            }
        }


    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline FAILED — check the logs above.'
        }
    }

}
