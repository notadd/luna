/* tslint:disable */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Bool: any,
  Bytes: any,
  Date: any,
  Double: any,
  Empty: any,
  Error: any,
  Fixed32: any,
  Fixed64: any,
  Int32: any,
  Int64: any,
  Json: any,
  Sfixed32: any,
  Sfixed64: any,
  Sint32: any,
  Sint64: any,
  Timestamp: any,
  Uint32: any,
  Uint64: any,
};














export type LoginInput = {
  username: Scalars['String'],
  password: Scalars['String'],
};

export type LoginResult = {
  __typename?: 'LoginResult',
  code: Scalars['Int'],
  message: Scalars['String'],
};

export type Query = {
  __typename?: 'Query',
  /** 用户登录 */
  login?: Maybe<LoginResult>,
};


export type QueryLoginArgs = {
  where: LoginInput
};







export type LoginQueryVariables = {
  where: LoginInput
};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { login: Maybe<(
    { __typename?: 'LoginResult' }
    & Pick<LoginResult, 'code' | 'message'>
  )> }
);

export const LoginDocument = gql`
    query login($where: LoginInput!) {
  login(where: $where) {
    code
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    client = 'apis';
  }
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};

      export default result;
    