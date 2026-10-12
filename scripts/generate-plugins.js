#!/usr/bin/env node
/**
 * Reads data/plugins.json and generates:
 *   - docs/plugins.md                  (marketplace listing, English)
 *   - docs/plugins/<slug>.md           (detail page, one per plugin, English)
 *
 * Populates translation keys for plugins and the marketplace into assets/i18n/*.json
 * for all 7 supported locales (en, de, es, fr, ja, ru, zh).
 * docmd stringMode and rewrite-links cleanly localize these via data-i18n.
 *
 * Run as part of predev / prebuild so docmd picks up generated files.
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'data', 'plugins.json');
const docsDir = path.join(root, 'docs');
const pluginsDir = path.join(docsDir, 'plugins');
const i18nDir = path.join(root, 'assets', 'i18n');

if (!fs.existsSync(dataPath)) {
  console.error(`[generate-plugins] data/plugins.json not found at ${dataPath}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const plugins = Array.isArray(data.plugins) ? data.plugins : [];

if (!fs.existsSync(pluginsDir)) fs.mkdirSync(pluginsDir, { recursive: true });

// Clean up any legacy directory-mode locale plugin folders
['zh', 'ru', 'de', 'es', 'fr', 'ja'].forEach(loc => {
  const locDir = path.join(docsDir, loc);
  if (fs.existsSync(locDir)) {
    fs.rmSync(locDir, { recursive: true, force: true });
  }
});

const navBlock = require('../templates/nav.js');
const footerNote = require('../templates/footer-note.js');

const LOCALES = ['en', 'de', 'es', 'fr', 'ja', 'ru', 'zh'];

const MARKETPLACE_I18N = {
  en: {
    'marketplace.title': 'Plugin <span class="gradient-text">marketplace.</span>',
    'marketplace.sub': 'Every official plugin for docmd, in one place. Built-ins ship with the core. Installable plugins add with one command. Filter by tag or capability, then click through for install instructions and the full permission table.',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> plugins`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> tags',
    'marketplace.search.placeholder': 'Search plugins…',
    'marketplace.filter.type': 'Type',
    'marketplace.filter.builtin': 'Built-in',
    'marketplace.filter.installable': 'Installable',
    'marketplace.filter.core': 'Built-in',
    'marketplace.filter.optional': 'Installable',
    'marketplace.filter.tags': 'Tags',
    'marketplace.filter.clear': 'Clear filters',
    'marketplace.filter.showing': 'Showing',
    'marketplace.filter.of': 'of',
    'marketplace.filter.contribute': 'Want to list your plugin? Open a PR adding it to <code>data/plugins.json</code>.',
    'marketplace.filter.empty': 'No plugins match the current filters.',
    'marketplace.core': 'Built-in',
    'marketplace.detail.allPlugins': 'All plugins',
    'marketplace.detail.overview': 'Overview',
    'marketplace.detail.installation': 'Installation',
    'marketplace.detail.permissions': 'Permissions',
    'marketplace.detail.permissionsDesc': 'Runtime behaviour of this plugin during a build:',
    'marketplace.detail.capabilities': 'Capabilities',
    'marketplace.detail.capabilitiesDesc': 'docmd hooks this plugin registers:',
    'marketplace.detail.tags': 'Tags',
    'marketplace.detail.otherPlugins': 'Other plugins',
    'marketplace.detail.package': 'Package',
    'marketplace.detail.name': 'Name',
    'marketplace.detail.version': 'Version',
    'marketplace.detail.kind': 'Kind',
    'marketplace.detail.source': 'Source',
    'marketplace.detail.copy': 'Copy',
    'marketplace.perm.capability': 'Capability',
    'marketplace.perm.used': 'Used',
    'marketplace.perm.readsProject': 'Reads project files',
    'marketplace.perm.writesSite': 'Writes to site/',
    'marketplace.perm.network': 'Network requests',
    'marketplace.perm.subprocess': 'Runs subprocess',
    'marketplace.perm.yes': 'Yes',
    'marketplace.perm.no': 'No',
    'plugins.explore.cta': 'Explore Plugin Marketplace',
    'plugins.mobile.cta': 'Explore Plugin Marketplace'
  },
  de: {
    'marketplace.title': 'Plugin-<span class="gradient-text">Marketplace.</span>',
    'marketplace.sub': 'Alle offiziellen Plugins für docmd an einem Ort. Integrierte Funktionen werden mit dem Core ausgeliefert. Installierbare Plugins lassen sich mit einem Befehl hinzufügen. Nach Tag oder Funktion filtern, um Installationsanleitungen und Berechtigungen anzuzeigen.',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> Plugins`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> Tags',
    'marketplace.search.placeholder': 'Plugins durchsuchen…',
    'marketplace.filter.type': 'Typ',
    'marketplace.filter.builtin': 'Integriert',
    'marketplace.filter.installable': 'Installierbar',
    'marketplace.filter.core': 'Integriert',
    'marketplace.filter.optional': 'Installierbar',
    'marketplace.filter.tags': 'Tags',
    'marketplace.filter.clear': 'Filter zurücksetzen',
    'marketplace.filter.showing': 'Zeige',
    'marketplace.filter.of': 'von',
    'marketplace.filter.contribute': 'Möchten Sie Ihr Plugin listen? Öffnen Sie einen PR und fügen Sie es zu <code>data/plugins.json</code> hinzu.',
    'marketplace.filter.empty': 'Keine Plugins entsprechen den aktuellen Filtern.',
    'marketplace.core': 'Integriert',
    'marketplace.detail.allPlugins': 'Alle Plugins',
    'marketplace.detail.overview': 'Übersicht',
    'marketplace.detail.installation': 'Installation',
    'marketplace.detail.permissions': 'Berechtigungen',
    'marketplace.detail.permissionsDesc': 'Laufzeitverhalten dieses Plugins während des Builds:',
    'marketplace.detail.capabilities': 'Funktionen',
    'marketplace.detail.capabilitiesDesc': 'docmd-Hooks, die dieses Plugin registriert:',
    'marketplace.detail.tags': 'Tags',
    'marketplace.detail.otherPlugins': 'Weitere Plugins',
    'marketplace.detail.package': 'Paket',
    'marketplace.detail.name': 'Name',
    'marketplace.detail.version': 'Version',
    'marketplace.detail.kind': 'Art',
    'marketplace.detail.source': 'Quelle',
    'marketplace.detail.copy': 'Kopieren',
    'marketplace.perm.capability': 'Funktion',
    'marketplace.perm.used': 'Verwendet',
    'marketplace.perm.readsProject': 'Liest Projektdateien',
    'marketplace.perm.writesSite': 'Schreibt in site/',
    'marketplace.perm.network': 'Netzwerkanfragen',
    'marketplace.perm.subprocess': 'Führt Subprozesse aus',
    'marketplace.perm.yes': 'Ja',
    'marketplace.perm.no': 'Nein',
    'plugins.explore.cta': 'Plugin-Marketplace erkunden',
    'plugins.mobile.cta': 'Plugin-Marketplace erkunden'
  },
  es: {
    'marketplace.title': 'Marketplace de <span class="gradient-text">plugins.</span>',
    'marketplace.sub': 'Todos los plugins oficiales de docmd en un solo lugar. Los integrados vienen con el núcleo. Los plugins instalables se agregan con un comando. Filtra por etiqueta o capacidad para ver las instrucciones y los permisos.',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> plugins`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> etiquetas',
    'marketplace.search.placeholder': 'Buscar plugins…',
    'marketplace.filter.type': 'Tipo',
    'marketplace.filter.builtin': 'Integrado',
    'marketplace.filter.installable': 'Instalable',
    'marketplace.filter.core': 'Integrado',
    'marketplace.filter.optional': 'Instalable',
    'marketplace.filter.tags': 'Etiquetas',
    'marketplace.filter.clear': 'Limpiar filtros',
    'marketplace.filter.showing': 'Mostrando',
    'marketplace.filter.of': 'de',
    'marketplace.filter.contribute': '¿Quieres incluir tu plugin? Abre un PR agregándolo a <code>data/plugins.json</code>.',
    'marketplace.filter.empty': 'Ningún plugin coincide con los filtros actuales.',
    'marketplace.core': 'Integrado',
    'marketplace.detail.allPlugins': 'Todos los plugins',
    'marketplace.detail.overview': 'Descripción general',
    'marketplace.detail.installation': 'Instalación',
    'marketplace.detail.permissions': 'Permisos',
    'marketplace.detail.permissionsDesc': 'Comportamiento en tiempo de ejecución durante la compilación:',
    'marketplace.detail.capabilities': 'Capacidades',
    'marketplace.detail.capabilitiesDesc': 'Hooks de docmd que registra este plugin:',
    'marketplace.detail.tags': 'Etiquetas',
    'marketplace.detail.otherPlugins': 'Otros plugins',
    'marketplace.detail.package': 'Paquete',
    'marketplace.detail.name': 'Nombre',
    'marketplace.detail.version': 'Versión',
    'marketplace.detail.kind': 'Tipo',
    'marketplace.detail.source': 'Fuente',
    'marketplace.detail.copy': 'Copiar',
    'marketplace.perm.capability': 'Capacidad',
    'marketplace.perm.used': 'Usado',
    'marketplace.perm.readsProject': 'Lee archivos del proyecto',
    'marketplace.perm.writesSite': 'Escribe en site/',
    'marketplace.perm.network': 'Peticiones de red',
    'marketplace.perm.subprocess': 'Ejecuta subprocesos',
    'marketplace.perm.yes': 'Sí',
    'marketplace.perm.no': 'No',
    'plugins.explore.cta': 'Explorar Marketplace de plugins',
    'plugins.mobile.cta': 'Explorar Marketplace de plugins'
  },
  fr: {
    'marketplace.title': 'Marketplace des <span class="gradient-text">plugins.</span>',
    'marketplace.sub': 'Tous les plugins officiels pour docmd en un seul endroit. Les plugins intégrés sont fournis avec le core. Les plugins installables s\'ajoutent en une commande. Filtrez par tag ou capacité pour afficher les détails et permissions.',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> plugins`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> tags',
    'marketplace.search.placeholder': 'Rechercher des plugins…',
    'marketplace.filter.type': 'Type',
    'marketplace.filter.builtin': 'Intégré',
    'marketplace.filter.installable': 'Installable',
    'marketplace.filter.core': 'Intégré',
    'marketplace.filter.optional': 'Installable',
    'marketplace.filter.tags': 'Tags',
    'marketplace.filter.clear': 'Effacer les filtres',
    'marketplace.filter.showing': 'Affichage de',
    'marketplace.filter.of': 'sur',
    'marketplace.filter.contribute': 'Vous voulez lister votre plugin ? Ouvrez une PR en l\'ajoutant à <code>data/plugins.json</code>.',
    'marketplace.filter.empty': 'Aucun plugin ne correspond aux filtres actuels.',
    'marketplace.core': 'Intégré',
    'marketplace.detail.allPlugins': 'Tous les plugins',
    'marketplace.detail.overview': 'Aperçu',
    'marketplace.detail.installation': 'Installation',
    'marketplace.detail.permissions': 'Autorisations',
    'marketplace.detail.permissionsDesc': 'Comportement d\'exécution de ce plugin lors du build :',
    'marketplace.detail.capabilities': 'Capacités',
    'marketplace.detail.capabilitiesDesc': 'Hooks docmd enregistrés par ce plugin :',
    'marketplace.detail.tags': 'Tags',
    'marketplace.detail.otherPlugins': 'Autres plugins',
    'marketplace.detail.package': 'Paquet',
    'marketplace.detail.name': 'Nom',
    'marketplace.detail.version': 'Version',
    'marketplace.detail.kind': 'Type',
    'marketplace.detail.source': 'Source',
    'marketplace.detail.copy': 'Copier',
    'marketplace.perm.capability': 'Capacité',
    'marketplace.perm.used': 'Utilisé',
    'marketplace.perm.readsProject': 'Lit les fichiers du projet',
    'marketplace.perm.writesSite': 'Écrit dans site/',
    'marketplace.perm.network': 'Requêtes réseau',
    'marketplace.perm.subprocess': 'Exécute des sous-processus',
    'marketplace.perm.yes': 'Oui',
    'marketplace.perm.no': 'Non',
    'plugins.explore.cta': 'Explorer la Marketplace des plugins',
    'plugins.mobile.cta': 'Explorer la Marketplace des plugins'
  },
  ja: {
    'marketplace.title': 'プラグイン<span class="gradient-text">マーケットプレイス。</span>',
    'marketplace.sub': 'docmd のすべての公式プラグインを一箇所に。ビルトインはコアに同梱され、インストール可能なプラグインは1つのコマンドで追加できます。タグや機能で絞り込み、インストール手順や権限一覧を確認できます。',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> プラグイン`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> タグ',
    'marketplace.search.placeholder': 'プラグインを検索…',
    'marketplace.filter.type': 'タイプ',
    'marketplace.filter.builtin': 'ビルトイン',
    'marketplace.filter.installable': 'インストール可能',
    'marketplace.filter.core': 'ビルトイン',
    'marketplace.filter.optional': 'インストール可能',
    'marketplace.filter.tags': 'タグ',
    'marketplace.filter.clear': 'フィルターをクリア',
    'marketplace.filter.showing': '表示中',
    'marketplace.filter.of': '/',
    'marketplace.filter.contribute': 'プラグインを掲載したいですか？<code>data/plugins.json</code> に追加してPRを作成してください。',
    'marketplace.filter.empty': '現在のフィルターに一致するプラグインはありません。',
    'marketplace.core': 'ビルトイン',
    'marketplace.detail.allPlugins': 'すべてのプラグイン',
    'marketplace.detail.overview': '概要',
    'marketplace.detail.installation': 'インストール',
    'marketplace.detail.permissions': '権限',
    'marketplace.detail.permissionsDesc': 'ビルド中のこのプラグインの実行時動作:',
    'marketplace.detail.capabilities': '機能',
    'marketplace.detail.capabilitiesDesc': 'このプラグインが登録するdocmdフック:',
    'marketplace.detail.tags': 'タグ',
    'marketplace.detail.otherPlugins': 'その他のプラグイン',
    'marketplace.detail.package': 'パッケージ',
    'marketplace.detail.name': '名前',
    'marketplace.detail.version': 'バージョン',
    'marketplace.detail.kind': '種別',
    'marketplace.detail.source': 'ソース',
    'marketplace.detail.copy': 'コピー',
    'marketplace.perm.capability': '機能',
    'marketplace.perm.used': '使用',
    'marketplace.perm.readsProject': 'プロジェクトファイルの読み取り',
    'marketplace.perm.writesSite': 'site/ への書き込み',
    'marketplace.perm.network': 'ネットワークリクエスト',
    'marketplace.perm.subprocess': 'サブプロセスの実行',
    'marketplace.perm.yes': 'はい',
    'marketplace.perm.no': 'いいえ',
    'plugins.explore.cta': 'プラグインマーケットプレイスを見る',
    'plugins.mobile.cta': 'プラグインマーケットプレイスを見る'
  },
  ru: {
    'marketplace.title': 'Маркетплейс <span class="gradient-text">плагинов.</span>',
    'marketplace.sub': 'Все официальные плагины для docmd в одном месте. Встроенные поставляются с ядром. Устанавливаемые плагины добавляются одной командой. Фильтруйте по тегам и возможностям для просмотра инструкций и таблицы разрешений.',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> плагинов`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> тегов',
    'marketplace.search.placeholder': 'Поиск плагинов…',
    'marketplace.filter.type': 'Тип',
    'marketplace.filter.builtin': 'Встроенный',
    'marketplace.filter.installable': 'Устанавливаемый',
    'marketplace.filter.core': 'Встроенный',
    'marketplace.filter.optional': 'Устанавливаемый',
    'marketplace.filter.tags': 'Теги',
    'marketplace.filter.clear': 'Сбросить фильтры',
    'marketplace.filter.showing': 'Показано',
    'marketplace.filter.of': 'из',
    'marketplace.filter.contribute': 'Хотите добавить свой плагин? Создайте PR с добавлением в <code>data/plugins.json</code>.',
    'marketplace.filter.empty': 'Нет плагинов, соответствующих выбранным фильтрам.',
    'marketplace.core': 'Встроенный',
    'marketplace.detail.allPlugins': 'Все плагины',
    'marketplace.detail.overview': 'Обзор',
    'marketplace.detail.installation': 'Установка',
    'marketplace.detail.permissions': 'Разрешения',
    'marketplace.detail.permissionsDesc': 'Поведение плагина во время сборки:',
    'marketplace.detail.capabilities': 'Возможности',
    'marketplace.detail.capabilitiesDesc': 'Хуки docmd, которые регистрирует этот плагин:',
    'marketplace.detail.tags': 'Теги',
    'marketplace.detail.otherPlugins': 'Другие плагины',
    'marketplace.detail.package': 'Пакет',
    'marketplace.detail.name': 'Название',
    'marketplace.detail.version': 'Версия',
    'marketplace.detail.kind': 'Тип',
    'marketplace.detail.source': 'Исходный код',
    'marketplace.detail.copy': 'Копировать',
    'marketplace.perm.capability': 'Возможность',
    'marketplace.perm.used': 'Используется',
    'marketplace.perm.readsProject': 'Чтение файлов проекта',
    'marketplace.perm.writesSite': 'Запись в site/',
    'marketplace.perm.network': 'Сетевые запросы',
    'marketplace.perm.subprocess': 'Запуск подпроцессов',
    'marketplace.perm.yes': 'Да',
    'marketplace.perm.no': 'Нет',
    'plugins.explore.cta': 'Исследовать маркетплейс плагинов',
    'plugins.mobile.cta': 'Исследовать маркетплейс плагинов'
  },
  zh: {
    'marketplace.title': '插件<span class="gradient-text">市场。</span>',
    'marketplace.sub': 'docmd 的所有官方插件汇聚于此。内置插件随核心分发，可安装插件一键添加。支持按标签或功能筛选，点击查看安装说明与完整权限表。',
    'marketplace.stats.plugins': `<strong>${plugins.length}</strong> 个插件`,
    'marketplace.stats.tags': '<strong>{tagsCount}</strong> 个标签',
    'marketplace.search.placeholder': '搜索插件…',
    'marketplace.filter.type': '类型',
    'marketplace.filter.builtin': '内置',
    'marketplace.filter.installable': '可安装',
    'marketplace.filter.core': '内置',
    'marketplace.filter.optional': '可安装',
    'marketplace.filter.tags': '标签',
    'marketplace.filter.clear': '清除筛选',
    'marketplace.filter.showing': '显示',
    'marketplace.filter.of': '共',
    'marketplace.filter.contribute': '想展示您的插件？提交 PR 将其添加到 <code>data/plugins.json</code>。',
    'marketplace.filter.empty': '没有符合当前筛选条件的插件。',
    'marketplace.core': '内置',
    'marketplace.detail.allPlugins': '所有插件',
    'marketplace.detail.overview': '概览',
    'marketplace.detail.installation': '安装',
    'marketplace.detail.permissions': '权限',
    'marketplace.detail.permissionsDesc': '该插件在构建过程中的运行时行为：',
    'marketplace.detail.capabilities': '功能特性',
    'marketplace.detail.capabilitiesDesc': '此插件注册的 docmd 钩子：',
    'marketplace.detail.tags': '标签',
    'marketplace.detail.otherPlugins': '其他插件',
    'marketplace.detail.package': '包信息',
    'marketplace.detail.name': '名称',
    'marketplace.detail.version': '版本',
    'marketplace.detail.kind': '类别',
    'marketplace.detail.source': '源码',
    'marketplace.detail.copy': '复制',
    'marketplace.perm.capability': '权限项',
    'marketplace.perm.used': '使用状态',
    'marketplace.perm.readsProject': '读取项目文件',
    'marketplace.perm.writesSite': '写入 site/',
    'marketplace.perm.network': '网络请求',
    'marketplace.perm.subprocess': '运行子进程',
    'marketplace.perm.yes': '是',
    'marketplace.perm.no': '否',
    'plugins.explore.cta': '探索插件市场',
    'plugins.mobile.cta': '探索插件市场'
  }
};

const allTags = Array.from(new Set(plugins.flatMap(p => p.tags || []))).sort();

// Interpolate tag count in stats
for (const loc of LOCALES) {
  if (MARKETPLACE_I18N[loc]['marketplace.stats.tags']) {
    MARKETPLACE_I18N[loc]['marketplace.stats.tags'] = MARKETPLACE_I18N[loc]['marketplace.stats.tags'].replace('{tagsCount}', String(allTags.length));
  }
}

// Helper to get field value for a locale (defaults to English)
function getField(val, loc = 'en') {
  if (!val) return '';
  if (typeof val === 'string') return val;
  return val[loc] || val.en || Object.values(val)[0] || '';
}

// ── 1. Synchronize translations into assets/i18n/*.json ────────────────────────
for (const loc of LOCALES) {
  const filePath = path.join(i18nDir, `${loc}.json`);
  let dict = {};
  if (fs.existsSync(filePath)) {
    try {
      dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      dict = {};
    }
  }

  // Inject global marketplace keys
  const globals = MARKETPLACE_I18N[loc] || MARKETPLACE_I18N.en;
  for (const [k, v] of Object.entries(globals)) {
    dict[k] = v;
  }

  // Inject plugin specific keys
  for (const p of plugins) {
    dict[`marketplace.plugin.${p.slug}.name`] = getField(p.name, loc);
    dict[`marketplace.plugin.${p.slug}.tagline`] = getField(p.tagline, loc);
    dict[`marketplace.plugin.${p.slug}.desc`] = getField(p.description, loc);
  }

  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
}
console.log(`[generate-plugins] Synchronized marketplace and plugin translation keys into assets/i18n/ (${LOCALES.join(', ')}).`);

// ── 2. Render templates ────────────────────────────────────────────────────────

const permLabels = {
  readsProject: 'Reads project files',
  writesSite: 'Writes to site/',
  network: 'Network requests',
  subprocess: 'Runs subprocess',
};

function renderDetail(plugin) {
  const isBuiltIn = plugin.kind === 'builtin' || plugin.kind === 'core';
  const nameEn = getField(plugin.name, 'en');
  const taglineEn = getField(plugin.tagline, 'en');
  const descEn = getField(plugin.description, 'en');

  const installBlock = isBuiltIn
    ? `<div class="mp-code"><span class="tok-cmt"># ${nameEn} ships with docmd — nothing to install.</span>\n<span class="tok-cmd">docmd build</span></div>`
    : `<div class="mp-code" id="install-${plugin.slug}"><span class="tok-cmd">${plugin.install || `docmd add ${plugin.slug}`}</span></div>
<button class="mp-btn" data-copy-target="install-${plugin.slug}" type="button">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
  <span data-i18n="marketplace.detail.copy">Copy</span>
</button>`;

  const permRows = Object.entries(plugin.permissions || {})
    .map(([k, v]) => `      <tr><td data-i18n="marketplace.perm.${k}">${permLabels[k] || k}</td><td>${v ? '<span class="mp-perm-yes" data-i18n="marketplace.perm.yes">Yes</span>' : '<span class="mp-perm-no" data-i18n="marketplace.perm.no">No</span>'}</td></tr>`)
    .join('\n');

  const capabilityTags = (plugin.capabilities || [])
    .map(c => `<code>${c}</code>`)
    .join(' ');

  const tagChips = (plugin.tags || [])
    .map(tag => `<span class="mp-tag">${tag}</span>`)
    .join('');

  const related = plugins
    .filter(p => p.slug !== plugin.slug)
    .slice(0, 3)
    .map(p => `    <a class="mp-card" href="/plugins/${p.slug}/">
      <div class="mp-card-head">
        <div class="mp-card-icon">${p.icon}</div>
        <div>
          <h3 class="mp-card-title" data-i18n="marketplace.plugin.${p.slug}.name">${getField(p.name, 'en')}</h3>
        </div>
      </div>
      <p class="mp-card-desc" data-i18n="marketplace.plugin.${p.slug}.tagline">${getField(p.tagline, 'en')}</p>
    </a>`)
    .join('\n');

  return `---
title: "${nameEn} plugin for docmd"
description: "${taglineEn.replace(/"/g, '&quot;')}"
titleAppend: false
noStyle: true
keywords:
  - "docmd"
  - "plugin"
  - "${nameEn.toLowerCase()}"
  - ${(plugin.tags || []).map(tag => `"${tag}"`).join('\n  - ')}
components:
  meta: true
  favicon: true
  scripts: false
  css: false
  theme: false
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="manifest" href="/assets/manifest.json">
  <meta property="og:site_name" content="docmd">
---

${navBlock.replace('<a href="/plugins/" class="nav-link"', '<a href="/plugins/" class="nav-link active active-plugins"')}

<main>
<section class="mp-detail">
  <div class="container">
    <a href="/plugins/" class="mp-detail-back">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      <span data-i18n="marketplace.detail.allPlugins">All plugins</span>
    </a>
    <div class="mp-detail-hero">
      <div class="mp-detail-hero-icon">${plugin.icon}</div>
      <div>
        <h1 data-i18n="marketplace.plugin.${plugin.slug}.name">${nameEn}</h1>
        <p data-i18n="marketplace.plugin.${plugin.slug}.tagline">${taglineEn}</p>
        <div class="mp-detail-meta">
          ${isBuiltIn ? '<span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>' : ''}
          <span class="mp-tag"><code>${plugin.npmPackage}</code></span>
        </div>
      </div>
    </div>

    <div class="mp-detail-body">
      <div>
        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.overview">Overview</h2>
          <p data-i18n="marketplace.plugin.${plugin.slug}.desc">${descEn}</p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.installation">Installation</h2>
          ${installBlock}
          <p class="hero-sub" style="font-size:0.85rem;">${isBuiltIn
            ? 'This plugin is built into docmd — nothing to install.'
            : 'Install via the <code>docmd</code> CLI, then enable under <code>plugins.' + plugin.slug + '</code> in <code>docmd.config.json</code>.'}</p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.permissions">Permissions</h2>
          <p data-i18n="marketplace.detail.permissionsDesc">Runtime behaviour of this plugin during a build:</p>
          <table class="mp-perm-table">
            <thead><tr><th data-i18n="marketplace.perm.capability">Capability</th><th data-i18n="marketplace.perm.used">Used</th></tr></thead>
            <tbody>
${permRows}
            </tbody>
          </table>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.capabilities">Capabilities</h2>
          <p data-i18n="marketplace.detail.capabilitiesDesc">docmd hooks this plugin registers:</p>
          <p>${capabilityTags}</p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.tags">Tags</h2>
          <div class="mp-card-tags">${tagChips}</div>
        </div>

        <div class="mp-related">
          <h2 data-i18n="marketplace.detail.otherPlugins">Other plugins</h2>
          <div class="mp-related-grid">
${related}
          </div>
        </div>
      </div>

      <aside class="mp-detail-aside">
        <h3 data-i18n="marketplace.detail.package">Package</h3>
        <dl>
          <dt data-i18n="marketplace.detail.name">Name</dt><dd><code>${plugin.npmPackage}</code></dd>
          <dt data-i18n="marketplace.detail.version">Version</dt><dd>v${plugin.version || '0.9.7'}</dd>
          <dt data-i18n="marketplace.detail.kind">Kind</dt><dd>${isBuiltIn ? '<span data-i18n="marketplace.filter.builtin">Built-in</span>' : '<span data-i18n="marketplace.filter.installable">Installable</span>'}</dd>
        </dl>
        <div class="mp-btn-row">
          <a class="mp-btn mp-btn-primary" href="${plugin.repo}" target="_blank" rel="noopener">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span data-i18n="marketplace.detail.source">Source</span>
          </a>
          <a class="mp-btn" href="https://www.npmjs.com/package/${plugin.npmPackage}" target="_blank" rel="noopener">npm</a>
        </div>
      </aside>
    </div>
  </div>
</section>
</main>
${footerNote}
`;
}

function renderListing() {
  const builtInCount = plugins.filter(p => p.kind === 'builtin' || p.kind === 'core').length;
  const installableCount = plugins.filter(p => p.kind === 'installable' || p.kind === 'optional').length;

  const cards = plugins.map(p => {
    const nameEn = getField(p.name, 'en');
    const taglineEn = getField(p.tagline, 'en');
    const isBuiltIn = p.kind === 'builtin' || p.kind === 'core';

    return `      <a class="mp-card" href="/plugins/${p.slug}/" data-name="${nameEn}" data-desc="${taglineEn.replace(/"/g, '&quot;')}" data-kind="${isBuiltIn ? 'builtin' : 'installable'}" data-tags="${(p.tags || []).join(',')}">
        <div class="mp-card-head">
          <div class="mp-card-icon">${p.icon}</div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.${p.slug}.name">${nameEn}</h3>
            ${isBuiltIn ? `<span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>` : ''}
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.${p.slug}.tagline">${taglineEn}</p>
        <div class="mp-card-tags">${(p.tags || []).slice(0, 4).map(tag => `<span class="mp-tag">${tag}</span>`).join('')}</div>
      </a>`;
  }).join('\n');

  const tagFilters = allTags.map(tag => {
    const count = plugins.filter(p => (p.tags || []).includes(tag)).length;
    return `            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="${tag}"/> ${tag}<span class="mp-filter-count">${count}</span></label></li>`;
  }).join('\n');

  return `---
title: "docmd Plugins – Marketplace"
description: "Browse every official docmd plugin. Search, filter by tag, and view capabilities, permissions, and install instructions."
titleAppend: false
noStyle: true
keywords:
  - "docmd"
  - "plugins"
  - "marketplace"
  - "documentation"
components:
  meta: true
  favicon: true
  scripts: false
  css: false
  theme: false
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="manifest" href="/assets/manifest.json">
  <meta property="og:site_name" content="docmd">
  <meta property="og:title" content="docmd Plugins Marketplace">
  <meta property="og:description" content="Browse ${plugins.length} official docmd plugins. Search, filter by tag, view capabilities and permissions.">
---

${navBlock.replace('<a href="/plugins/" class="nav-link"', '<a href="/plugins/" class="nav-link active active-plugins"')}

<main>
<header class="mp-hero">
  <div class="container">
    <h1 data-i18n-html="marketplace.title">Plugin <span class="gradient-text">marketplace.</span></h1>
    <p class="hero-sub" data-i18n="marketplace.sub">Every official plugin for docmd, in one place. Built-ins ship with the core. Installable plugins add with one command. Filter by tag or capability, then click through for install instructions and the full permission table.</p>
    <div class="mp-hero-actions">
      <a class="btn-primary mp-hero-add-btn" href="https://github.com/docmd-io/docmd.io/issues/new?template=submit-plugin.yml" target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <span data-i18n="marketplace.submitPlugin">Submit Plugin</span>
      </a>
    </div>
    <div class="mp-hero-stats">
      <span data-i18n-html="marketplace.stats.plugins"><strong>${plugins.length}</strong> plugins</span>
      <span data-i18n-html="marketplace.stats.tags"><strong>${allTags.length}</strong> tags</span>
    </div>
  </div>
</header>

<div class="container">
  <div class="mp-layout">
    <aside class="mp-sidebar" aria-label="Plugin filters">
      <div class="mp-search">
        <span class="mp-search-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input id="mp-search-input" type="search" placeholder="Search plugins…" aria-label="Search plugins" data-i18n-placeholder="marketplace.search.placeholder"/>
      </div>

      <div class="mp-filter-group">
        <h3 data-i18n="marketplace.filter.type">Type</h3>
        <ul class="mp-filter-list">
          <li><label class="mp-filter-option"><input type="checkbox" data-group="kind" value="builtin"/> <span data-i18n="marketplace.filter.builtin">Built-in</span><span class="mp-filter-count">${builtInCount}</span></label></li>
          <li><label class="mp-filter-option"><input type="checkbox" data-group="kind" value="installable"/> <span data-i18n="marketplace.filter.installable">Installable</span><span class="mp-filter-count">${installableCount}</span></label></li>
        </ul>
      </div>

      <div class="mp-filter-group">
        <h3 data-i18n="marketplace.filter.tags">Tags</h3>
        <ul class="mp-filter-list">
${tagFilters}
        </ul>
      </div>

      <button id="mp-clear" class="mp-clear" type="button" data-i18n="marketplace.filter.clear">Clear filters</button>

      <div class="mp-filter-group" style="margin-top:auto;">
        <a class="btn-primary mp-sidebar-add" href="https://github.com/docmd-io/docmd.io/issues/new?template=submit-plugin.yml" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span data-i18n="marketplace.submitPlugin">Submit Plugin</span>
        </a>
        <p style="font-size:0.75rem;color:var(--mp-text-muted);margin:0;line-height:1.5;">
          <span data-i18n="marketplace.filter.showing">Showing</span> <strong id="mp-count" style="color:var(--mp-text-primary);">${plugins.length}</strong> <span data-i18n="marketplace.filter.of">of</span> ${plugins.length}.
          <br/><br/>
          <span data-i18n-html="marketplace.filter.contribute">Want to list your plugin? Click &ldquo;Submit Plugin&rdquo; above or open a PR adding it to <code>data/plugins.json</code>.</span>
        </p>
      </div>
    </aside>

    <div class="mp-grid" id="mp-grid">
${cards}
      <div id="mp-empty" class="mp-empty" style="display:none;" data-i18n="marketplace.filter.empty">No plugins match the current filters.</div>
    </div>
  </div>
</div>
</main>
${footerNote}
`;
}

// ── 3. Write markdown documentation files ──────────────────────────────────────
let written = 0;
for (const plugin of plugins) {
  const out = path.join(pluginsDir, `${plugin.slug}.md`);
  fs.writeFileSync(out, renderDetail(plugin));
  written++;
}
fs.writeFileSync(path.join(docsDir, 'plugins.md'), renderListing());

console.log(`[generate-plugins] Wrote ${written} detail pages and docs/plugins.md (${plugins.length} plugins).`);
