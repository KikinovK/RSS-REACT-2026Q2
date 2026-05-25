import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { generateCSV, downloadCSV } from '../utils/csvExport';
import { SearchResult } from '../types/SearchResult';

const mockPokemon1: SearchResult = {
  id: '1',
  name: 'bulbasaur',
  description: 'A strange seed was planted on its back at birth.',
  image: 'https://example.com/bulbasaur.png',
};

const mockPokemon2: SearchResult = {
  id: '25',
  name: 'pikachu',
  description: 'When several of these Pokemon gather, they can generate strong electricity.',
  image: 'https://example.com/pikachu.png',
};

const mockPokemonWithQuotes: SearchResult = {
  id: '39',
  name: 'jigglypuff',
  description: 'Known as the "Balloon Pokemon".',
  image: 'https://example.com/jigglypuff.png',
};

describe('csvExport', () => {
  describe('generateCSV', () => {
    it('should return empty string for empty array', () => {
      const result = generateCSV([]);
      expect(result).toBe('');
    });

    it('should generate CSV with headers and single row', () => {
      const result = generateCSV([mockPokemon1]);
      const lines = result.split('\n');

      expect(lines).toHaveLength(2);
      expect(lines[0]).toBe('ID,Name,Description,Image URL');
      expect(lines[1]).toContain('1');
      expect(lines[1]).toContain('bulbasaur');
    });

    it('should generate CSV with multiple rows', () => {
      const result = generateCSV([mockPokemon1, mockPokemon2]);
      const lines = result.split('\n');

      expect(lines).toHaveLength(3);
      expect(lines[0]).toBe('ID,Name,Description,Image URL');
      expect(lines[1]).toContain('bulbasaur');
      expect(lines[2]).toContain('pikachu');
    });

    it('should properly quote and escape pokemon names', () => {
      const result = generateCSV([mockPokemon1]);
      expect(result).toContain('"bulbasaur"');
    });

    it('should properly escape quotes in descriptions', () => {
      const result = generateCSV([mockPokemonWithQuotes]);
      expect(result).toContain('""Balloon Pokemon""');
    });

    it('should include all pokemon details in correct order', () => {
      const result = generateCSV([mockPokemon1]);
      const lines = result.split('\n');
      const dataLine = lines[1];

      expect(dataLine).toMatch(
        /1,"bulbasaur","A strange seed was planted on its back at birth.",https:\/\/example\.com\/bulbasaur\.png/
      );
    });

    it('should handle pokemon with special characters in description', () => {
      const pokemon: SearchResult = {
        id: '50',
        name: 'diglett',
        description: 'Lives about one yard underground where it feeds on plant roots & nutrients.',
        image: 'https://example.com/diglett.png',
      };

      const result = generateCSV([pokemon]);
      expect(result).toContain('diglett');
      expect(result).toContain('&');
    });

    it('should maintain CSV format with image URLs', () => {
      const result = generateCSV([mockPokemon1, mockPokemon2]);
      expect(result).toContain('https://example.com/bulbasaur.png');
      expect(result).toContain('https://example.com/pikachu.png');
    });
  });

  describe('downloadCSV', () => {
    beforeEach(() => {
      vi.spyOn(document, 'createElement').mockReturnValue(document.createElement('a'));
      vi.spyOn(document.body, 'appendChild');
      vi.spyOn(document.body, 'removeChild');
      vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-url');
      vi.spyOn(URL, 'revokeObjectURL');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should create a link element', () => {
      const createElementSpy = vi.spyOn(document, 'createElement');

      downloadCSV([mockPokemon1]);

      expect(createElementSpy).toHaveBeenCalledWith('a');
    });

    it('should set download attribute with correct filename', () => {
      const link = document.createElement('a');
      const setAttributeSpy = vi.spyOn(link, 'setAttribute');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1, mockPokemon2]);

      expect(setAttributeSpy).toHaveBeenCalledWith('download', '2_items.csv');
    });

    it('should set href to blob URL', () => {
      const link = document.createElement('a');
      const setAttributeSpy = vi.spyOn(link, 'setAttribute');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1]);

      expect(setAttributeSpy).toHaveBeenCalledWith('href', 'blob:mock-url');
    });

    it('should append link to body', () => {
      const appendChildSpy = vi.spyOn(document.body, 'appendChild');
      const link = document.createElement('a');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1]);

      expect(appendChildSpy).toHaveBeenCalledWith(link);
    });

    it('should trigger click on link', () => {
      const link = document.createElement('a');
      const clickSpy = vi.spyOn(link, 'click');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1]);

      expect(clickSpy).toHaveBeenCalled();
    });

    it('should remove link from body', () => {
      const removeChildSpy = vi.spyOn(document.body, 'removeChild');
      const link = document.createElement('a');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1]);

      expect(removeChildSpy).toHaveBeenCalledWith(link);
    });

    it('should revoke object URL', () => {
      const revokeObjectURLSpy = vi.spyOn(URL, 'revokeObjectURL');

      downloadCSV([mockPokemon1]);

      expect(revokeObjectURLSpy).toHaveBeenCalledWith('blob:mock-url');
    });

    it('should set link visibility to hidden', () => {
      const link = document.createElement('a');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV([mockPokemon1]);

      expect(link.style.visibility).toBe('hidden');
    });

    it('should handle empty array', () => {
      const createElementSpy = vi.spyOn(document, 'createElement');

      downloadCSV([]);

      expect(createElementSpy).toHaveBeenCalledWith('a');
    });

    it('should generate correct filename for different counts', () => {
      const link = document.createElement('a');
      const setAttributeSpy = vi.spyOn(link, 'setAttribute');

      vi.spyOn(document, 'createElement').mockReturnValue(link);

      downloadCSV(Array(15).fill(mockPokemon1));

      expect(setAttributeSpy).toHaveBeenCalledWith('download', '15_items.csv');
    });

    it('should call createObjectURL with Blob containing CSV', () => {
      const createObjectURLSpy = vi.spyOn(URL, 'createObjectURL');

      downloadCSV([mockPokemon1]);

      expect(createObjectURLSpy).toHaveBeenCalled();
      const blob = createObjectURLSpy.mock.calls[0][0] as Blob;
      expect(blob.type).toBe('text/csv;charset=utf-8;');
    });
  });
});
