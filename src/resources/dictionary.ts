import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

//编程字典
const programming: DictionaryResource[] = [
  // {
  //   id: 'coder',
  //   name: 'Coder Dict',
  //   description: '程序员常见单词词库',
  //   category: '代码练习',
  //   tags: ['通用'],
  //   url: '/dicts/it-words.json',
  //   length: 1700,
  //   language: 'code',
  //   languageCategory: 'code',
  // },
  {
    id: 'childCode002',
    name: 'Python Turtle',
    description: 'Python Turtle 常见词',
    category: '代码练习',
    tags: ['全部', 'Python'],
    url: '/dicts/Child_python_turtle_code.json',
    length: 27,
    language: 'en',
    languageCategory: 'code',
  },
  {
    id: 'childCode',
    name: '基础Python',
    description: '基础Python',
    category: '代码练习',
    tags: ['全部', 'Python'],
    url: '/dicts/Child_python_code.json',
    length: 19,
    language: 'en',
    languageCategory: 'code',
  },

  {
    id: 'childCode001',
    name: '变量常用起名',
    description: '变量常用起名单词',
    category: '代码练习',
    tags: ['全部', 'Python', 'C++'],
    url: 'dicts/variable.json',
    length: 19,
    language: 'en',
    languageCategory: 'code',
  },

  {
    id: 'childCode003',
    name: '基础C++',
    description: '基础C++常见词',
    category: '代码练习',
    tags: ['全部', 'C++'],
    url: '/dicts/Child_c++.json',
    length: 39,
    language: 'en',
    languageCategory: 'code',
  },

  //   {
  //     id: 'python-builtin',
  //     name: 'Python: Built-in',
  //     description: 'Python Built-in API',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-builtin.json',
  //     length: 65,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-array',
  //     name: 'Python: array',
  //     description: 'Python array API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-array.json',
  //     length: 11,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-date',
  //     name: 'Python: date',
  //     description: 'Python date API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-date.json',
  //     length: 39,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-file',
  //     name: 'Python: file',
  //     description: 'Python file API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-file.json',
  //     length: 21,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-class',
  //     name: 'Python: class',
  //     description: 'Python class API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-class.json',
  //     length: 13,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-set',
  //     name: 'Python: set',
  //     description: 'Python set API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-set.json',
  //     length: 29,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-math',
  //     name: 'Python: math',
  //     description: 'Python math API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-math.json',
  //     length: 37,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-string',
  //     name: 'Python: string',
  //     description: 'Python string API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-string.json',
  //     length: 40,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
  //   {
  //     id: 'python-system',
  //     name: 'Python: system',
  //     description: 'Python system API ',
  //     category: '代码练习',
  //     tags: ['全部','Python'],
  //     url: '/dicts/python-sys.json',
  //     length: 24,
  //     language: 'code',
  //     languageCategory: 'code',
  //   },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaryResources: DictionaryResource[] = [...programming]

export const dictionaries: Dictionary[] = dictionaryResources.map((resource) => ({
  ...resource,
  chapterCount: calcChapterCount(resource.length),
}))

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
