#pragma once
#ifndef AE2F_BITCUTTER
#ifndef AE2F_CPP_PREFIX
#ifdef AE2F_CPP
#define AE2F_CPP_PREFIX extern "C"
#else
#define AE2F_CPP_PREFIX
#endif // AE2F_CPP
#endif // !AE2F_CPP_PREFIX

#define ae2f_BitCutter_bit(byte, bitPoint, bitCount) ((unsigned char)byte >> (unsigned char)bitPoint) - ((unsigned char)byte >> (unsigned char)bitPoint + (unsigned char)bitCount << (unsigned char)bitCount)
#define ae2f_BitCutter_bitConvert(byte, bitPoint, setterVal, valBitCount) ((unsigned char)byte - ae2f_BitCutter_bit(byte, bitPoint, valBitCount) + (setterVal << bitPoint))

#endif // !AE2F_BITCUTTER