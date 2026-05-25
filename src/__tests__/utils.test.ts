import { describe, it, expect } from 'vitest';
import { extractLastSegment } from '../utils/utils';

describe('utils', () => {
  describe('extractLastSegment', () => {
    it('should extract ID from standard pokemon API URL', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should extract ID from URL without trailing slash', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/25';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should extract name from pokemon URL', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/';
      expect(extractLastSegment(url)).toBe('pikachu');
    });

    it('should extract name from URL without trailing slash', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
      expect(extractLastSegment(url)).toBe('pikachu');
    });

    it('should work with different API endpoints', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon-species/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with relative URLs', () => {
      const url = '/api/v2/pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with simple path', () => {
      const url = 'pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with just ID and slash', () => {
      const url = '25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with just ID without slash', () => {
      const url = '25';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should handle empty string', () => {
      const url = '';
      expect(extractLastSegment(url)).toBe('');
    });

    it('should handle single slash', () => {
      const url = '/';
      expect(extractLastSegment(url)).toBe('');
    });

    it('should extract last segment from complex nested path', () => {
      const url = 'https://api.example.com/v1/users/123/pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with URLs containing hyphens', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon-species/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should work with URLs containing numbers in path', () => {
      const url = '/api/v2/pokemon/12345/';
      expect(extractLastSegment(url)).toBe('12345');
    });

    it('should preserve case of extracted segment', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/Pikachu/';
      expect(extractLastSegment(url)).toBe('Pikachu');
    });

    it('should work with protocol-relative URLs', () => {
      const url = '//pokeapi.co/api/v2/pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });

    it('should handle very long IDs', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/99999999/';
      expect(extractLastSegment(url)).toBe('99999999');
    });

    it('should handle alphanumeric segments', () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/pika2chu/';
      expect(extractLastSegment(url)).toBe('pika2chu');
    });

    it('should handle URL with only path segments and trailing slash', () => {
      const url = 'api/pokemon/25/';
      expect(extractLastSegment(url)).toBe('25');
    });
  });
});
