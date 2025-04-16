import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    codeBlockPlugin,
    markdownShortcutPlugin,
    toolbarPlugin,
    linkDialogPlugin,
    linkPlugin,
    tablePlugin,
    InsertThematicBreak,
    InsertAdmonition,
    AdmonitionPlugin,
    InsertBlockquote,
    thematicBreakPlugin,
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CreateLink,
    InsertCodeBlock,
    InsertTable,
    ListsToggle,
    Separator,
    UndoRedo,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

export default function DocGenerator() {
    const [type, setType] = useState('doc');
    const [category, setCategory] = useState('linux');
    const [title, setTitle] = useState('');
    const [sections, setSections] = useState([{ subtitle: '', content: '' }]);
    const [mdxContent, setMdxContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            type,
            category,
            title,
            mdxContent,
        };

        const res = await fetch('http://localhost:3001/api/create-mdx', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        alert(data.message);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>Crear {type === 'doc' ? 'Doc' : 'Blog'} con MDX</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tipo:
                    <select value={type} onChange={e => setType(e.target.value)} style={{ marginLeft: '1rem' }}>
                        <option value="doc">Doc</option>
                        <option value="blog">Blog</option>
                    </select>
                </label>

                {type === 'doc' && (
                    <div style={{ margin: '1rem 0' }}>
                        <label>Categoría:</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            placeholder="linux, git, etc."
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                )}

                <div style={{ margin: '1rem 0' }}>
                    <label>Título del documento:</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Título"
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <label>Contenido MDX:</label>
                    <MDXEditor
                        markdown={mdxContent}
                        onChange={setMdxContent}
                        plugins={[
                            headingsPlugin(),
                            listsPlugin(),
                            quotePlugin(),
                            codeBlockPlugin(),
                            markdownShortcutPlugin(),
                            linkDialogPlugin(),
                            linkPlugin(),
                            tablePlugin(),
                            thematicBreakPlugin(),
                            AdmonitionPlugin(),
                            toolbarPlugin({
                                toolbarContents: () => (
                                    <>
                                        <UndoRedo />
                                        <Separator />
                                        <BoldItalicUnderlineToggles />
                                        <Separator />
                                        <InsertCodeBlock />
                                        <Separator />
                                        <ListsToggle />
                                        <BlockTypeSelect />
                                        <Separator />
                                        <CreateLink />
                                        <InsertTable />
                                        <InsertThematicBreak />
                                        <InsertBlockquote />
                                        <InsertAdmonition />
                                    </>
                                )
                            })
                        ]}
                    />

                </div>

                <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                    Crear Archivo
                </button>
            </form>
        </div>
    );
}