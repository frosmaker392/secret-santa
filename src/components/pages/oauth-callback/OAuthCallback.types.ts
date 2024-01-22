import { Params } from '@solidjs/router';

export interface OAuthCallbackParams extends Params {
    code: string;
    state: string;
}
