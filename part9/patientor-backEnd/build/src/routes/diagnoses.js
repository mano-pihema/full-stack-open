"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fetchDiagnoses_1 = __importDefault(require("../service/fetchDiagnoses"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(fetchDiagnoses_1.default.getDiags());
});
exports.default = router;
