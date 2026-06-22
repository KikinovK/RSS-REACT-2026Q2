'use server'

import { revalidateTag } from 'next/cache';

import { FETCH_KET } from '../utils/const';

export const syncAllData = async () => {
  revalidateTag(FETCH_KET, 'max');
}
