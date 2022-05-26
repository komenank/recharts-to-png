import { renderHook } from '@testing-library/react';
import { useCurrentPng } from '../index';

describe('useCurrentPng', () => {
  test('returns a tuple', async () => {
    const { result } = renderHook(() => useCurrentPng());

    expect(result.current.length).toBe(2);
  });
});
