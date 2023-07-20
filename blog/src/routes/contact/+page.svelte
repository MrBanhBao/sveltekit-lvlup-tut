<script>
    import { enhance } from '$app/forms';
    import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

    export let form;
    $: console.log('form', form);
    
    // standart submit
    async function handleForm(event) {
        // this === form element
        // creating form data
        const data = new FormData(this);

        // sending our own fetch post request
        const res = await fetch(this.action, {
            method: 'POST',
            body: data
        })
        
        // get data by deserialising
        const result = deserialize(await res.text());

        // see if success
        // reload if so
        if(result.type === 'success') {
            await invalidateAll();
        }

        // population form
        applyAction(result);
    }
</script>

<h1>Contacts</h1>

{#if form?.error_message}
    <p>
        {form.error_message}
    </p>
{/if}

{#if form?.message} 
    <p>{form.message}</p>
{:else}
    <!-- <form use:enhance={({form, data, action}) => {
        // form is form element
        // data is formData Object
        // action is url form posts to
        // cancel is cancel form from submitting

        return ({result, update}) => {
            // result -> actionResult
            // update () -> runs all of the default use:enhance
            update();
        }

    }}
    action="contact?/email" 
    method="POST"> -->
    <form on:submit|preventDefault={handleForm}
    action="/contact?/email">
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