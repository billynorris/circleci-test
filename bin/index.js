"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__handler = void 0;
const __handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (((_a = event === null || event === void 0 ? void 0 : event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.message) === undefined) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Expected property: 'message'`
            })
        };
    }
    var result = {
        message: event.queryStringParameters.message
    };
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
});
exports.__handler = __handler;
//# sourceMappingURL=index.js.map