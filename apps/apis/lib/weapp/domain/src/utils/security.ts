import { createHash } from "crypto";

/**
 * 加密密码
 * @param password 密码
 */
export function encryptionPassword(password: string): string {
    return createHash('md5').update(password).digest('hex');
}

/**
 * 验证密码，密码比对
 * @param password 未加密密码
 * @param hexPassword 加密的密码
 */
export function vefiryPassword(password: string, hexPassword: string): boolean {
    return encryptionPassword(password) === hexPassword;
}