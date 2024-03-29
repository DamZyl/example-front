/* tslint:disable */
/* eslint-disable */
/**
 * ExampleApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @enum {string}
 */

export const CommentType = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type CommentType = typeof CommentType[keyof typeof CommentType];


/**
 * 
 * @export
 * @interface CommentViewModel
 */
export interface CommentViewModel {
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'author'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommentViewModel
     */
    'type'?: string | null;
}
/**
 * 
 * @export
 * @interface CreateCommentInput
 */
export interface CreateCommentInput {
    /**
     * 
     * @type {string}
     * @memberof CreateCommentInput
     */
    'title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCommentInput
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCommentInput
     */
    'date'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCommentInput
     */
    'author'?: string | null;
    /**
     * 
     * @type {CommentType}
     * @memberof CreateCommentInput
     */
    'type'?: CommentType;
}
/**
 * 
 * @export
 * @interface CreateCommentViewModel
 */
export interface CreateCommentViewModel {
    /**
     * 
     * @type {string}
     * @memberof CreateCommentViewModel
     */
    'commentId'?: string;
}
/**
 * 
 * @export
 * @interface EnumViewModel
 */
export interface EnumViewModel {
    /**
     * 
     * @type {number}
     * @memberof EnumViewModel
     */
    'key'?: number;
    /**
     * 
     * @type {string}
     * @memberof EnumViewModel
     */
    'value'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EnumViewModel
     */
    'enumTypeName'?: string | null;
}

/**
 * CommentApi - axios parameter creator
 * @export
 */
export const CommentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentCommentIdPut: async (commentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'commentId' is not null or undefined
            assertParamExists('commentCommentIdPut', 'commentId', commentId)
            const localVarPath = `/Comment/{commentId}`
                .replace(`{${"commentId"}}`, encodeURIComponent(String(commentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionInternalPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment/Exception/Internal`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionNotFoundPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment/Exception/NotFound`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionUnhandledPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment/Exception/Unhandled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionValidationPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment/Exception/Validation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('commentIdGet', 'id', id)
            const localVarPath = `/Comment/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateCommentInput} [createCommentInput] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentPost: async (createCommentInput?: CreateCommentInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Comment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCommentInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommentApi - functional programming interface
 * @export
 */
export const CommentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentCommentIdPut(commentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentCommentIdPut(commentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentExceptionInternalPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentExceptionInternalPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentExceptionNotFoundPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentExceptionNotFoundPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentExceptionUnhandledPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentExceptionUnhandledPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentExceptionValidationPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentExceptionValidationPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CommentViewModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommentViewModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateCommentInput} [createCommentInput] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commentPost(createCommentInput?: CreateCommentInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCommentViewModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commentPost(createCommentInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CommentApi - factory interface
 * @export
 */
export const CommentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommentApiFp(configuration)
    return {
        /**
         * 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentCommentIdPut(commentId: string, options?: any): AxiosPromise<void> {
            return localVarFp.commentCommentIdPut(commentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionInternalPost(options?: any): AxiosPromise<void> {
            return localVarFp.commentExceptionInternalPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionNotFoundPost(options?: any): AxiosPromise<void> {
            return localVarFp.commentExceptionNotFoundPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionUnhandledPost(options?: any): AxiosPromise<void> {
            return localVarFp.commentExceptionUnhandledPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentExceptionValidationPost(options?: any): AxiosPromise<void> {
            return localVarFp.commentExceptionValidationPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentGet(options?: any): AxiosPromise<Array<CommentViewModel>> {
            return localVarFp.commentGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentIdGet(id: string, options?: any): AxiosPromise<CommentViewModel> {
            return localVarFp.commentIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateCommentInput} [createCommentInput] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentPost(createCommentInput?: CreateCommentInput, options?: any): AxiosPromise<CreateCommentViewModel> {
            return localVarFp.commentPost(createCommentInput, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommentApi - object-oriented interface
 * @export
 * @class CommentApi
 * @extends {BaseAPI}
 */
export class CommentApi extends BaseAPI {
    /**
     * 
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentCommentIdPut(commentId: string, options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentCommentIdPut(commentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentExceptionInternalPost(options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentExceptionInternalPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentExceptionNotFoundPost(options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentExceptionNotFoundPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentExceptionUnhandledPost(options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentExceptionUnhandledPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentExceptionValidationPost(options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentExceptionValidationPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentGet(options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentIdGet(id: string, options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateCommentInput} [createCommentInput] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentApi
     */
    public commentPost(createCommentInput?: CreateCommentInput, options?: AxiosRequestConfig) {
        return CommentApiFp(this.configuration).commentPost(createCommentInput, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EnumApi - axios parameter creator
 * @export
 */
export const EnumApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enumGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Enum`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnumApi - functional programming interface
 * @export
 */
export const EnumApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnumApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enumGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EnumViewModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enumGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnumApi - factory interface
 * @export
 */
export const EnumApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnumApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enumGet(options?: any): AxiosPromise<Array<EnumViewModel>> {
            return localVarFp.enumGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnumApi - object-oriented interface
 * @export
 * @class EnumApi
 * @extends {BaseAPI}
 */
export class EnumApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnumApi
     */
    public enumGet(options?: AxiosRequestConfig) {
        return EnumApiFp(this.configuration).enumGet(options).then((request) => request(this.axios, this.basePath));
    }
}


