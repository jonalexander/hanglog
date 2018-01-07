import AWS from 'aws-sdk'
import 'amazon-cognito-js'
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  WebIdentityCredentials
} from 'amazon-cognito-identity-js'

import config from 'config/cognito'

export default class Cognito {
  constructor() {
    this.userPool = new CognitoUserPool({
      UserPoolId: config.UserPoolId,
      ClientId: config.ClientId
    })
  }
}
