<script>
    import { enhance } from '$app/forms';

    export let form;
    $: console.log('form', form);
</script>

<h1>Contacts</h1>

{#if form?.error_message}
    <p>
        {form.error_message}
    </p>
{/if}

{#if form?.massage} 
    <p>{form.message}</p>
{:else}
    <form use:enhance method="POST">
        <label>
            Name: <input type="text" required name="name" id="name"/> 
        </label>

        <label>
            e-Mail: <input type="email" required name="email" id="email"/> 
        </label>

        <label>
            Message: <textarea required name="message" id="message"/> 
        </label>

        <button type="submit">Send email</button>
    </form>
{/if}

<style>
    form {
        padding: 20px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
    label {
        display: block;
    }
</style>